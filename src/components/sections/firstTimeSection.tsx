'use client';
import Card from '@/components/ui/card';
import style from './firstTimeSection.module.css';
import CardContent from '../others/cardContent';
import {PriceListItems} from '@public/priceListItems';
import {FAQItem, faqItems} from '@public/faqItems';
import {useContactForm} from '@/utils/contactFormContext';

interface CardData {
  index: number;
  optionIndex?: number;
  emphasized?: boolean;
}

const cardData = [
  {index: 5, optionIndex: 1},
  {index: 5, optionIndex: 0, emphasized: true},
  {index: 3},
  {index: 4},
];

const getCardContentProps = (data: CardData) => {
  const service = PriceListItems[data.index];
  const option =
    data.optionIndex !== undefined ? service.options[data.optionIndex] : null;
  return {
    title: option ? option.name : service.name,
    details: option ? option.additional : service.additional,
    price: option ? option.price : '',
    description: option ? option.description : service.description,
  };
};

export default function FirstTimeSection() {
  const {setShowContactForm} = useContactForm();
  if (!setShowContactForm) {
    throw new Error('setShowContactForm is undefined');
  }
  return (
    <section className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm m-auto py-8">
      <h1 className="title-big">First Time Climbing?</h1>
      <div className="separator-text my-8"></div>
      <div className={style['cards-container']}>
        {cardData.map((data, i) => (
          <Card key={i} className={data.emphasized ? style.emphasized : undefined}>
            <CardContent {...getCardContentProps(data)} emphasized={data.emphasized} />
          </Card>
        ))}
        <Card>
          <div className={style.header}>
            <h1 className="title-small capitalize !leading-normal">
              ? Frequently Asked Questions
            </h1>
            <div className="separator-text"></div>
          </div>
          <div className={style.body}>
            {faqItems.map((item: FAQItem, index: number) => (
              <li key={index}>
                <h3 className="title-verysmall">{item.question}</h3>
                <p className="pl-4 italic">{item.answer}</p>
              </li>
            ))}
            <button
              className="btn btn-black self-end"
              onClick={() => setShowContactForm(true)}
            >
              CONTACT US
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}
