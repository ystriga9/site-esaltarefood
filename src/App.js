import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import DashboardLayout from './layout/DashboardLayout';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<div>Welcome</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
