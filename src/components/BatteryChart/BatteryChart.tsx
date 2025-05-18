import React from 'react';
import { View, Text } from 'react-native';
import { CartesianChart, Line, useChartPressState } from 'victory-native';
import type { SharedValue } from 'react-native-reanimated';
import { Circle, useFont } from '@shopify/react-native-skia';
import interMedium from '../../assets/fonts/InterMedium.ttf';
import { styles } from './BatteryChart.styles';
import { useTheme } from '../../hooks/useTheme';
import { BatteryChartProps } from './BatteryChart.types';
import { formatTimeUTC } from '../../utils/date.utils';

function ToolTip({
  x,
  y,
  color,
}: {
  x: SharedValue<number>;
  y: SharedValue<number>;
  color: string;
}) {
  return <Circle cx={x} cy={y} r={6} color={color} />;
}

export default function BatteryChart({ batteryData }: BatteryChartProps) {
  const font = useFont(interMedium, 12);
  const theme = useTheme();

  const latestPoint = batteryData[batteryData.length - 1];
  const { state } = useChartPressState({
    x: latestPoint.date,
    y: { chargingLevel: latestPoint.chargingLevel },
  });

  const currentChargingLevel = state.y.chargingLevel.value.value;
  const currentDate = state.x.value.value;

  return (
    <View>
      <View style={styles.infoContainer}>
        <Text style={styles.valueLabel}>
          Battery Status:{' '}
          <Text
            style={[
              currentChargingLevel > 30 ? styles.greenText : styles.redText,
            ]}>
            {currentChargingLevel}%
          </Text>
        </Text>
        <Text style={styles.timeText}>
          Timestamp: {formatTimeUTC(currentDate)}
        </Text>
      </View>
      <View style={styles.chartContainer}>
        <CartesianChart
          data={batteryData}
          xKey="date"
          yKeys={['chargingLevel']}
          chartPressState={state}
          axisOptions={{
            font,
            tickCount: 3,
            formatXLabel: value => {
              const pointDate = new Date(value);
              const hours = pointDate.getHours().toString().padStart(2, '0');
              const minutes = pointDate
                .getMinutes()
                .toString()
                .padStart(2, '0');
              return `${hours}:${minutes}`;
            },
          }}>
          {({ points }) => (
            <>
              <Line
                points={points.chargingLevel}
                color={theme.colors.secondary}
                strokeWidth={2}
              />
              <ToolTip
                x={state.x.position}
                y={state.y.chargingLevel.position}
                color={theme.colors.secondary}
              />
            </>
          )}
        </CartesianChart>
      </View>
    </View>
  );
}
