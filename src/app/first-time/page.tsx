import {NextPage} from 'next';
import Footer from '@/components/sections/footerSection';
import Header from '@/components/ui/header';
import FirstTimeSection from '@/components/sections/firstTimeSection';
import ContactFormModal from '@/components/ui/contactFormModal';
import {ContactFormProvider} from '@/utils/contactFormContext';

const FirstTimePage: NextPage = () => {
  return (
    <>
      <ContactFormProvider>
        <Header />
        <FirstTimeSection />
        <Footer />
        <ContactFormModal />
      </ContactFormProvider>
    </>
  );
};
export default FirstTimePage;
