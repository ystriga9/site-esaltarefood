import React from 'react';

const DashboardLayout = ({ children }) => (
  <div className="dashboard-layout">
    <aside className="sidebar">Sidebar</aside>
    <main className="content">{children}</main>
  </div>
);

export default DashboardLayout;
