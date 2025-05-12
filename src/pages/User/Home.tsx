
import Layout from '../../components/Layout';
import HeroSection from '../../components/HeroSection';
import PopularTerrariums from '../../components/PopularTerrariums';
import MemberBenefits from '../../components/MemberBenefits';
import CustomerReviews from '../../components/CustomerReviews';

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