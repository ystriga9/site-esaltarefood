import React, { useEffect, useState } from 'react';
import { getSalesData } from '../api/client';

const SalesChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    getSalesData()
      .then((res) => {
        if (mounted) setData(res);
      })
      .catch(console.error);
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) {
    return <div>Loading sales data...</div>;
  }

  return (
    <div>
      <h2>Sales Chart</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SalesChart;
