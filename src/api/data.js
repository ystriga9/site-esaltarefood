// Basic sample data and helpers for sales and stock
const sales = [
  { id: 1, date: '2024-05-01', category: 'food', amount: 120 },
  { id: 2, date: '2024-05-03', category: 'beverage', amount: 80 },
  { id: 3, date: '2024-06-01', category: 'food', amount: 150 }
];

const stock = [
  { id: 'a', date: '2024-05-02', category: 'food', quantity: 50 },
  { id: 'b', date: '2024-05-04', category: 'beverage', quantity: 70 },
  { id: 'c', date: '2024-06-05', category: 'food', quantity: 30 }
];

function filterByDateAndCategory(data, { startDate, endDate, category } = {}) {
  return data.filter((item) => {
    const dateOk = (!startDate || item.date >= startDate) && (!endDate || item.date <= endDate);
    const categoryOk = !category || item.category === category;
    return dateOk && categoryOk;
  });
}

export function getSalesData(filters = {}) {
  return filterByDateAndCategory(sales, filters);
}

export function getStockData(filters = {}) {
  return filterByDateAndCategory(stock, filters);
}

