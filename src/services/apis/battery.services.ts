import { BatteryDataResponse } from '../../models/battery.models';
import mockBatteryData from '../../mocks/battery-mock.json';

export const fetchBatteryData = async (): Promise<BatteryDataResponse> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: 'success',
        data: mockBatteryData.chargingStates,
      });
    }, 1000); // 1 second delay
  });
};

// TODO: Use this block when real API is ready
/*
  try {
    const response = await apiClient.get('/battery');
    return {
      status: 'success',
      data: response.data?.chargingStates,
    };
  } catch (error) {
    console.error('Error fetching battery data:', error);
    return {
      status: 'error',
      message: 'Failed to fetch battery data',
      data: [],
    };
  }
  */
