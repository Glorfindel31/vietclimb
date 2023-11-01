import {NextPage} from 'next';

import Header from '@components/header';
import PageHead from '@components/pageHead';
import SectionFirstTime from '@components/sectionFirstTime';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <PageHead />
      <SectionFirstTime />
    </div>
  );
};
export default Home;
