import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SalesChart from './components/SalesChart';
import Stocks from './components/Stocks';
import Clients from './components/Clients';

const App = () => (
  <Routes>
    <Route path="/ventes" element={<SalesChart />} />
    <Route path="/stocks" element={<Stocks />} />
    <Route path="/clients" element={<Clients />} />
  </Routes>
);

export default App;
