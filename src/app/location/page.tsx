import {NextPage} from 'next';
import Footer from '@/components/sections/footerSection';
import Header from '@/components/ui/header';
import ContactFormModal from '@/components/ui/contactFormModal';
import {ContactFormProvider} from '@/utils/contactFormContext';

const LocationPage: NextPage = () => {
  return (
    <>
      <ContactFormProvider>
        <Header />
        <Footer />
        <ContactFormModal />
      </ContactFormProvider>
    </>
  );
};
export default LocationPage;
