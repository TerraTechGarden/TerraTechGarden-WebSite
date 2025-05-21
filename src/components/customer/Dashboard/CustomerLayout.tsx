import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const CustomerLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerLayout;