export interface BatteryDataPoint extends Record<string, unknown> {
  date: string;
  chargingLevel: number;
  internalEventId: number;
}

export interface BatteryDataResponse {
  status: 'success' | 'error';
  message?: string;
  data: BatteryDataPoint[];
}
