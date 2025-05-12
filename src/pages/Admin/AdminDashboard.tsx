// pages/AdminDashboard.tsx
import AdminSidebar from '../../components/admin/AdminSiderbar';
import AdminHeader from '../../components/admin/AdminHeader';
import QuickStats from '../../components/admin/QuickStats';
import RevenueChart from '../../components/admin/RevenueChart';
import EmployeeList from '../../components/admin/EmployeeList';
import AIPackagePlans from '../../components/admin/AIPackagePlans';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Nội dung chính */}
      <div className="flex-1 p-6 bg-gray-100">
        <AdminHeader />
        <QuickStats />
        <RevenueChart />
        <EmployeeList />
        <AIPackagePlans />
      </div>
    </div>
  );
};

export default AdminDashboard;