import { render, fireEvent } from '@testing-library/react-native';
import BatteryLogs from './BatteryLogs';
import { BatteryDataPoint } from '../../models/battery.models';

// Mock the BottomSheetModal component
jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react');
  const { View } = require('react-native');

  const MockBottomSheetModal = React.forwardRef(
    ({
      children,
      onChange,
    }: {
      children: React.ReactNode;
      onChange?: (index: number) => void;
    }) => {
      return (
        <View testID="bottom-sheet">
          {children}
          <View testID="mock-change-index" onPress={() => onChange?.(1)} />
          <View testID="mock-close-sheet" onPress={() => onChange?.(-1)} />
        </View>
      );
    },
  );

  return {
    BottomSheetModal: MockBottomSheetModal,
    BottomSheetFlatList: ({ children }: { children: React.ReactNode }) => (
      <View testID="bottom-sheet-flatlist">{children}</View>
    ),
  };
});

// Mock battery data with proper typing
const mockBatteryData: BatteryDataPoint[] = [
  {
    internalEventId: 1,
    date: '2023-01-01T00:00:00Z',
    chargingLevel: 50,
  },
  {
    internalEventId: 2,
    date: '2023-01-01T01:00:00Z',
    chargingLevel: 30,
  },
];

describe('BatteryLogs', () => {
  describe('Initial render', () => {
    it('renders the button with "Show detailed log" text initially', () => {
      const { getByText } = render(
        <BatteryLogs batteryData={mockBatteryData} />,
      );

      const button = getByText('Show detailed log');
      expect(button).toBeTruthy();
    });
  });

  describe('Button interaction', () => {
    it('changes button text when bottom sheet is opened and closed', () => {
      const { getByText, getByTestId } = render(
        <BatteryLogs batteryData={mockBatteryData} />,
      );

      const button = getByText('Show detailed log');
      fireEvent.press(button);

      // Simulate sheet opening
      fireEvent.press(getByTestId('mock-change-index'));
      expect(getByText('Hide detailed log')).toBeTruthy();

      // Simulate sheet closing
      fireEvent.press(getByTestId('mock-close-sheet'));
      expect(getByText('Show detailed log')).toBeTruthy();
    });
  });
});
