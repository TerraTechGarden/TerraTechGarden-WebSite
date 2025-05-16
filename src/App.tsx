
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Customer/Home';
import Layout from './components/customer/Layout/Layout';
import Detail from './pages/Customer/Detail';
import Register from './pages/Customer/Register';
import BlogDetails from './pages/Customer/BlogDetails';
import Checkout from './pages/Customer/Checkout';
import EditProfile from './pages/Customer/EditProfile';
import ShiftManagement from './pages/Admin/ShiftManagement';
import AdminLayout from './components/admin/AdminLayout';
import CustomerManagement from './pages/Admin/CustomerManagement';
import StaffManagement from './pages/Admin/StaffManagement';
import ManagerManagement from './pages/Admin/ManagerManagement';
import ShipperManagement from './pages/Admin/ShipperManagement';
import AllOrders from './pages/Admin/AllOrders';
import PreparingOrders from './pages/Admin/PreparingOrders';
import ShippingOrders from './pages/Admin/ShippingOrders';
import CompletedOrders from './pages/Admin/CompletedOrders';
import CanceledOrders from './pages/Admin/CanceledOrders';
import RevenueReport from './pages/Admin/RevenueReport';
import StatisticsReport from './pages/Admin/StatisticsReport';

const Shop = React.lazy(() => import('./pages/Customer/Shop'));
const Membership = React.lazy(() => import('./pages/Customer/MemberShip'));
const Blog = React.lazy(() => import('./pages/Customer/Blog'));
const About = React.lazy(() => import('./pages/Customer/About'));
const Login = React.lazy(() => import('./pages/Customer/Login'));
const Profile = React.lazy(() => import('./pages/Customer/Profile'));
const Cart = React.lazy(() => import('./pages/Customer/Cart'));
const StaffDashboard = React.lazy(() => import('./pages/Staff/StaffDashboard'));
const ManagerDashboard = React.lazy(() => import('./pages/Manager/ManagerDashboard'));
const AdminDashboard = React.lazy(() => import('./pages/Admin/AdminDashboard'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Suspense fallback={<div>Đang tải...</div>}><Home /></Suspense>} />
        <Route path="/shop" element={<Suspense fallback={<div>Đang tải...</div>}><Shop /></Suspense>} />
        <Route path="/membership" element={<Suspense fallback={<div>Đang tải...</div>}><Membership /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<div>Đang tải...</div>}><Blog /></Suspense>} />
        <Route path="/blog/:id" element={<Suspense fallback={<div>Đang tải...</div>}><BlogDetails /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<div>Đang tải...</div>}><About /></Suspense>} />
        <Route path="/profile" element={<Suspense fallback={<div>Đang tải...</div>}><Profile /></Suspense>} />
        <Route path="/edit-profile" element={<Suspense fallback={<div>Đang tải...</div>}><EditProfile /></Suspense>} />
        <Route path="/cart" element={<Suspense fallback={<div>Đang tải...</div>}><Cart /></Suspense>} />
        <Route path="/checkout" element={<Suspense fallback={<div>Đang tải...</div>}><Checkout /></Suspense>} />
        <Route path="/terrarium/:id" element={<Suspense fallback={<div>Đang tải...</div>}><Detail /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<div>Đang tải...</div>}><Register /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<div>Đang tải...</div>}><Login /></Suspense>} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Suspense fallback={<div>Đang tải...</div>}><AdminDashboard /></Suspense>} />
        <Route path="/admin/shift-management" element={<Suspense fallback={<div>Đang tải...</div>}><ShiftManagement /></Suspense>} />
        <Route path="/admin/overview" element={<Suspense fallback={<div>Đang tải...</div>}><AdminDashboard /></Suspense>} />
        <Route path="/admin/accounts/customer" element={<Suspense fallback={<div>Đang tải...</div>}><CustomerManagement /></Suspense>} />
        <Route path="/admin/accounts/staff" element={<Suspense fallback={<div>Đang tải...</div>}><StaffManagement /></Suspense>} />
        <Route path="/admin/accounts/manager" element={<Suspense fallback={<div>Đang tải...</div>}><ManagerManagement /></Suspense>} />
        <Route path="/admin/accounts/shipper" element={<Suspense fallback={<div>Đang tải...</div>}><ShipperManagement /></Suspense>} />
        <Route path="/admin/orders/all" element={<Suspense fallback={<div>Đang tải...</div>}><AllOrders /></Suspense>} />
        <Route path="/admin/orders/preparing" element={<Suspense fallback={<div>Đang tải...</div>}><PreparingOrders /></Suspense>} />
        <Route path="/admin/orders/shipping" element={<Suspense fallback={<div>Đang tải...</div>}><ShippingOrders /></Suspense>} />
        <Route path="/admin/orders/completed" element={<Suspense fallback={<div>Đang tải...</div>}><CompletedOrders /></Suspense>} />
        <Route path="/admin/orders/canceled" element={<Suspense fallback={<div>Đang tải...</div>}><CanceledOrders /></Suspense>} />
        <Route path="/admin/revenue" element={<Suspense fallback={<div>Đang tải...</div>}><RevenueReport /></Suspense>} />
        <Route path="/admin/statistics" element={<Suspense fallback={<div>Đang tải...</div>}><StatisticsReport /></Suspense>} /> 
        <Route path="/admin/settings" element={<Suspense fallback={<div>Đang tải...</div>}><AdminDashboard /></Suspense>} />
        <Route path="/admin/reports" element={<Suspense fallback={<div>Đang tải...</div>}><AdminDashboard /></Suspense>} />
      </Route>
      <Route path="/staff-dashboard" element={<Suspense fallback={<div>Đang tải...</div>}><StaffDashboard /></Suspense>} />
      <Route path="/manager-dashboard" element={<Suspense fallback={<div>Đang tải...</div>}><ManagerDashboard /></Suspense>} />
      
    </Routes>
    
  );
};

export default App;