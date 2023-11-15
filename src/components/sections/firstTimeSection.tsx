'use client';
import Card from '@/components/ui/card';
import style from './firstTimeSection.module.css';
import CardContent from '../others/cardContent';
import {PriceListItems} from '@public/priceListItems';
import {FAQItem, faqItems} from '@public/faqItems';
import {useContactForm} from '@/utils/contactFormContext';

interface CardData {
  title: string;
  additional: string;
  price: string;
  description: string;
  emphasized?: boolean;
}

const cardData = [
  {
    title: PriceListItems[5].options[1].name,
    additional: PriceListItems[5].options[1].additional,
    price: PriceListItems[5].options[1].price,
    description: PriceListItems[5].options[1].description,
  },
  {
    title: PriceListItems[5].options[0].name,
    additional: PriceListItems[5].options[0].additional,
    price: PriceListItems[5].options[0].price,
    description: PriceListItems[5].options[0].description,
    emphasized: true,
  },
  {
    title: PriceListItems[3].name,
    additional: PriceListItems[3].additional,
    price: PriceListItems[3].options[0].price,
    description: PriceListItems[3].description,
  },
  {
    title: PriceListItems[4].name,
    additional: PriceListItems[4].additional,
    price: PriceListItems[4].options[0].price,
    description: PriceListItems[4].description,
  },
];

export default function FirstTimeSection() {
  const {setShowContactForm} = useContactForm();
  if (!setShowContactForm) {
    throw new Error('setShowContactForm is undefined');
  }
  return (
    <section className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm m-auto py-8 flex flex-col gap-8">
      <h1 className="title-big">First Time Climbing?</h1>
      <div className="separator-text"></div>
      <h2 className="title-small">We have everything you need to get started!</h2>
      <div className={style['cards-container']}>
        {cardData.map((data, i) => (
          <Card key={i} className={data.emphasized ? style.emphasized : undefined}>
            <CardContent {...data} emphasized={data.emphasized} />
          </Card>
        ))}
        <Card>
          <div className={style.header}>
            <h1 className="title-small capitalize !leading-normal">
              ? Frequently Asked Questions
            </h1>
            <div className="separator-text"></div>
          </div>
          <ul className={style.body}>
            {faqItems.map((item: FAQItem, index: number) => (
              <li key={index}>
                <h3 className="title-verysmall">- {item.question}</h3>
                <p className="pl-4 italic">{item.answer}</p>
              </li>
            ))}
            <button
              className="btn btn-black self-end"
              onClick={() => setShowContactForm(true)}
            >
              CONTACT US
            </button>
          </ul>
        </Card>
      </div>
    </section>
  );
}
