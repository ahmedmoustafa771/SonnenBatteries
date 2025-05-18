import React, { useEffect } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { BatteryChart } from '../../components/BatteryChart';
import useBatteryData from '../../hooks/useBatteryData';
import { styles } from './BatteryScreen.styles';
import { useTheme } from '../../hooks/useTheme';
import { BatteryLogs } from '../../components/BatteryLogs';

export default function BatteryScreen() {
  const { data, loading, error } = useBatteryData();
  const theme = useTheme();

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Failed to Load Data',
        text2: error,
      });
    }
  }, [error]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <BottomSheetModalProvider>
      <ScrollView style={styles.container}>
        <BatteryChart batteryData={data} />
        <BatteryLogs batteryData={data} />
      </ScrollView>
    </BottomSheetModalProvider>
  );
}
