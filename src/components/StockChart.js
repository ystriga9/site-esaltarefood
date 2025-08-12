import React, { useEffect, useState } from 'react';
import { getStockData } from '../api/client';

const StockChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    getStockData()
      .then((res) => {
        if (mounted) setData(res);
      })
      .catch(console.error);
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) {
    return <div>Loading stock data...</div>;
  }

  return (
    <div>
      <h2>Stock Chart</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default StockChart;
