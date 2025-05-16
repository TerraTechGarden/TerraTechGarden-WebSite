import HeroSection from '../../components/customer/Layout/HeroSection';
import PopularTerrariums from '../../components/customer/Terrarium/PopularTerrariums';
import MemberBenefits from '../../components/customer/Layout/MemberBenefits';
import CustomerReviews from '../../components/customer/Terrarium/CustomerReviews';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PopularTerrariums />
      <MemberBenefits />
      <CustomerReviews />
    </>
  );
};

export default Home;