import { useEffect, useState } from 'react';
import { BatteryDataPoint } from '../models/battery.models';
import { fetchBatteryData } from '../services/apis/battery.services';

const useBatteryData = () => {
  const [data, setData] = useState<BatteryDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchBatteryData();
        if (response.status === 'success') {
          setData(response.data);
        } else {
          setError(response.message || 'Unknown error');
        }
      } catch (err) {
        setError('Failed to connect to server');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

export default useBatteryData;
