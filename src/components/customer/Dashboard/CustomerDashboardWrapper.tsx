import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const CustomerDashboardWrapper: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerDashboardWrapper;