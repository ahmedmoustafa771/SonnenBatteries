import { View, TouchableOpacity, Text } from 'react-native';
import { BottomSheetModal, BottomSheetFlatList } from '@gorhom/bottom-sheet';

import { styles } from './BatteryLogs.styles';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { BatteryDataPoint } from '../../models/battery.models';
import { useTheme } from '../../hooks/useTheme';
import { BatteryLogsProps } from './BatteryLogs.types';
import { formatTimeUTC } from '../../utils/date.utils';

const BatteryLogItem = React.memo(({ item }: { item: BatteryDataPoint }) => {
  const theme = useTheme();

  const formattedDate = formatTimeUTC(item.date);
  const levelColor =
    item.chargingLevel > 30 ? theme.colors.success : theme.colors.danger;

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.dateText}>{formattedDate}</Text>
      <Text style={styles.levelText}>
        Level: <Text style={{ color: levelColor }}>{item.chargingLevel}%</Text>
      </Text>
    </View>
  );
});

export default function BatteryLogs({ batteryData }: BatteryLogsProps) {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSheetChange = useCallback((index: number) => {
    setIsModalOpen(index >= 0);
  }, []);

  const toggleBottomSheet = useCallback(() => {
    if (isModalOpen) {
      bottomSheetRef.current?.dismiss();
    } else {
      bottomSheetRef.current?.present();
    }
  }, [isModalOpen]);

  const renderItem = ({ item }: { item: BatteryDataPoint }) => (
    <BatteryLogItem item={item} />
  );

  const snapPoints = useMemo(() => ['50%', '70%'], []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isModalOpen && styles.buttonClose]}
        onPress={toggleBottomSheet}>
        <Text style={styles.buttonText}>
          {isModalOpen ? 'Hide detailed log' : 'Show detailed log'}
        </Text>
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enableOverDrag={false}
        enablePanDownToClose
        onChange={handleSheetChange}>
        <BottomSheetFlatList
          data={batteryData}
          keyExtractor={item => item.internalEventId.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.bottomSheetContainer}
          initialNumToRender={6}
          maxToRenderPerBatch={6}
          windowSize={6}
          removeClippedSubviews={true}
        />
      </BottomSheetModal>
    </View>
  );
}
