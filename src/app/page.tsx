'use client';
import {NextPage} from 'next';
import {useState, useEffect} from 'react';
import HeroSection from '@/components/sections/heroSection';
import AboutSection from '@/components/sections/aboutSection';
import GymSection from '@/components/sections/gymSection';
import OutdoorSection from '@/components/sections/outdoorSection';
import InfoSection from '@/components/sections/infoSection';
import Footer from '@/components/sections/footerSection';
import Header from '@/components/ui/header';
import ContactFormModal from '@/components/ui/contactFormModal';

const Home: NextPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const showContactFormHandler = () => {
    setShowContactForm(false);
  };

  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showContactForm]);

  return (
    <>
      <HeroSection />
      <Header />
      <AboutSection setShowContactForm={setShowContactForm} />
      <GymSection />
      <OutdoorSection />
      <InfoSection />
      <Footer setShowContactForm={setShowContactForm} />
      {showContactForm && <ContactFormModal onClose={showContactFormHandler} />}
    </>
  );
};
export default Home;
