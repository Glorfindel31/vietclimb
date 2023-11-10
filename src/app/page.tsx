import {NextPage} from 'next';
import HeroSection from '@/components/sections/heroSection';
import AboutSection from '@/components/sections/aboutSection';
import GymSection from '@/components/sections/gymSection';
import OutdoorSection from '@/components/sections/outdoorSection';
import InfoSection from '@/components/sections/infoSection';
import Footer from '@/components/sections/footerSection';
import Header from '@/components/ui/header';
import ContactFormModal from '@/components/ui/contactFormModal';
import {ContactFormProvider} from '@/utils/contactFormContext';

const Home: NextPage = () => {
  return (
    <>
      <ContactFormProvider>
        <HeroSection />
        <Header />
        <AboutSection />
        <GymSection />
        <OutdoorSection />
        <InfoSection />
        <Footer />
        <ContactFormModal />
      </ContactFormProvider>
    </>
  );
};
export default Home;
