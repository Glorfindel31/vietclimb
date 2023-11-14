import Card from '@/components/ui/card';
import style from './firstTimeSection.module.css';
import {PriceListItems} from '@public/priceListItems';

export default function FirstTimeSection() {
  return (
    <section className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm m-auto py-8">
      <h1 className="title-big">First Time Climbing?</h1>
      <div className="separator-text my-8"></div>
      <div className={style['cards-container']}>
        <Card
          title={PriceListItems[5].options[1].name}
          details={PriceListItems[5].options[1].additional || ''}
          price={PriceListItems[5].options[1].price || ''}
          content={PriceListItems[5].options[1].description || ''}
          url="https://res.cloudinary.com/dfzrhlnwe/image/upload/f_auto,q_auto/v1/gym/_DSC0167_t5sxyg"
        />
        <Card
          title={PriceListItems[5].options[0].name}
          details={PriceListItems[5].options[0].additional || ''}
          price={PriceListItems[5].options[0].price || ''}
          content={PriceListItems[5].options[0].description || ''}
          url="https://res.cloudinary.com/dfzrhlnwe/image/upload/f_auto,q_auto/v1/gym/_DSC0204_bbkx6e"
        />
        <Card
          title={PriceListItems[3].name}
          details={PriceListItems[3].additional || ''}
          price={PriceListItems[3].options[0].price || ''}
          content={PriceListItems[3].description || ''}
          url="https://res.cloudinary.com/dfzrhlnwe/image/upload/f_auto,q_auto/v1/gym/_DSC0204_bbkx6e"
        />
        <Card
          title={PriceListItems[4].name}
          details={PriceListItems[4].additional || ''}
          price={PriceListItems[4].options[0].price || ''}
          content={PriceListItems[4].description || ''}
          url="https://res.cloudinary.com/dfzrhlnwe/image/upload/f_auto,q_auto/v1/gym/onugbpdjcqy0a8izbmfv"
          imageCentering="top"
        />
      </div>
    </section>
  );
}
