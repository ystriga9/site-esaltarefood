import React, { useEffect, useState } from 'react';
import Filters from './Filters';
import { getSalesData, getStockData } from '../api/data';
import Papa from 'papaparse';

/**
 * Simple dashboard layout showing filtered data and an export button.
 */
export default function DashboardLayout() {
  const [filters, setFilters] = useState({ startDate: '', endDate: '', category: '' });
  const [sales, setSales] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    setSales(getSalesData(filters));
    setStock(getStockData(filters));
  }, [filters]);

  const handleExport = () => {
    const csv = Papa.unparse({
      fields: ['type', 'id', 'date', 'category', 'amount', 'quantity'],
      data: [
        ...sales.map((s) => ['sale', s.id, s.date, s.category, s.amount, '']),
        ...stock.map((s) => ['stock', s.id, s.date, s.category, '', s.quantity])
      ]
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Filters filters={filters} onChange={setFilters} />
      <button onClick={handleExport}>Exporter</button>
      <pre>{JSON.stringify({ sales, stock }, null, 2)}</pre>
    </div>
  );
}

