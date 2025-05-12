
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/User/Home';
import Layout from './components/Layout';
import Detail from './pages/User/Detail';
import Register from './pages/User/Register';
import BlogDetails from './pages/User/BlogDetails';
import Checkout from './pages/User/Checkout';

const Shop = React.lazy(() => import('./pages/User/Shop'));
const Membership = React.lazy(() => import('./pages/User/MemberShip'));
const Blog = React.lazy(() => import('./pages/User/Blog'));
const About = React.lazy(() => import('./pages/User/About'));
const Login = React.lazy(() => import('./pages/User/Login'));
const Profile = React.lazy(() => import('./pages/User/Profile'));
const Cart = React.lazy(() => import('./pages/User/Cart'));
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
        <Route path="/cart" element={<Suspense fallback={<div>Đang tải...</div>}><Cart /></Suspense>} />
        <Route path="/checkout" element={<Suspense fallback={<div>Đang tải...</div>}><Checkout /></Suspense>} />
        <Route path="/terrarium/:id" element={<Suspense fallback={<div>Đang tải...</div>}><Detail /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<div>Đang tải...</div>}><Register /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<div>Đang tải...</div>}><Login /></Suspense>} />
      </Route>
      <Route path="/staff-dashboard" element={<Suspense fallback={<div>Đang tải...</div>}><StaffDashboard /></Suspense>} />
      <Route path="/manager-dashboard" element={<Suspense fallback={<div>Đang tải...</div>}><ManagerDashboard /></Suspense>} />
      <Route path="/admin-dashboard" element={<Suspense fallback={<div>Đang tải...</div>}><AdminDashboard /></Suspense>} />
    </Routes>
  );
};

export default App;