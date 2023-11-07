import {NextPage} from 'next';

import HeroSection from '@/components/sections/heroSection';
import AboutSection from '@/components/sections/aboutSection';
import GymSection from '@/components/sections/gymSection';
import OutdoorSection from '@/components/sections/outdoorSection';
import InfoSection from '@/components/sections/infoSection';
import Footer from '@/components/sections/footerSection';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GymSection />
      <OutdoorSection />
      <InfoSection />
      <Footer />
    </>
  );
};
export default Home;
