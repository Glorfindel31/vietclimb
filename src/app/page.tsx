import {NextPage} from 'next';

import Header from '@components/header';
import PageHead from '@components/pageHead';
import SectionFirstTime from '@components/sectionFirstTime';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <PageHead />
      <section className="h-screen w-screen bg-slate-600"></section>
      <SectionFirstTime />
    </>
  );
};
export default Home;
