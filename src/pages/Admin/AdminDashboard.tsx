
import QuickStats from '../../components/admin/QuickStats';
import RevenueChart from '../../components/admin/RevenueChart';
import EmployeeList from '../../components/admin/EmployeeList';
import AIPackagePlans from '../../components/admin/AIPackagePlans';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      
      <div className="flex-1 p-6 bg-gray-100">
        
        <QuickStats />
        <RevenueChart />
        <EmployeeList />
        <AIPackagePlans />
      </div>
    </div>
  );
};

export default AdminDashboard;