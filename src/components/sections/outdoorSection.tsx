import {OutdoorSectionItems} from '@public/serviceItems';
import CarouselService from '@components/ui/carouselService';

const items = OutdoorSectionItems;

export default function outdoorSection() {
  return (
    <section className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm h-screen flex flex-row m-auto">
      <CarouselService items={items} row={'flex-row-reverse'}/>
    </section>
  );
}
