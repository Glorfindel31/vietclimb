import {NextPage} from 'next';
import Footer from '@/components/sections/footerSection';
import Header from '@/components/ui/header';
import PriceListSection from '@/components/sections/priceListSection';
import ContactFormModal from '@/components/ui/contactFormModal';
import {ContactFormProvider} from '@/utils/contactFormContext';

const PriceListPage: NextPage = () => {
  return (
    <>
      <ContactFormProvider>
        <Header />
        <PriceListSection />
        <Footer />
        <ContactFormModal />
      </ContactFormProvider>
    </>
  );
};
export default PriceListPage;
