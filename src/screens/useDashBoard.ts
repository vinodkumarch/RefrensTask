import {useCallback, useEffect, useState} from 'react';
import {DashBoard} from '../models/dashBoard';
import {getCharactersFromApi} from '../services/dashBoard.service';

export const useDashBoard = () => {
  const [gridData, setGridData] = useState<DashBoard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getCharactersFromApi();
      setGridData(data);
    } catch (serviceError) {
      setError(serviceError);
    } finally {
      setLoading(false);
    }
  }, [setGridData, setLoading, setError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    error, // used to show error alert design if api fails
    gridData,
    loading,
  };
};
