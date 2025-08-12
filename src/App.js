import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardLayout from './layout/DashboardLayout';
import Ventes from './pages/Ventes';
import Stocks from './pages/Stocks';
import Clients from './pages/Clients';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <DashboardLayout>
        <Routes>
          <Route path="/ventes" element={<Ventes />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
