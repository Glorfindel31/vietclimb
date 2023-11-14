'use client';
import Card from '@/components/ui/card';
import style from './firstTimeSection.module.css';
import {PriceListItems} from '@public/priceListItems';
import {useContactForm} from '@/utils/contactFormContext';
import Image from 'next/image';

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
        <Card>
          <div className={style.header}>
            <h1 className="title-small capitalize !leading-normal">
              {PriceListItems[5].options[1].name}
            </h1>
            <div className="relative h-80 w-full">
              <Image
                className="object-cover grayscale contrast-[110%]"
                src="https://res.cloudinary.com/dfzrhlnwe/image/upload/f_auto,q_auto/v1/gym/_DSC0167_t5sxyg"
                alt="Picture of the author"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>
          <div className={style.body}>
            <div className="flex flex-row justify-between">
              <h3 className="subtitle-verysmall">
                *{PriceListItems[5].options[1].additional}
              </h3>{' '}
              <h3 className="subtitle-verysmall">
                {PriceListItems[5].options[1].price} VND
              </h3>
            </div>
            <p>{PriceListItems[5].options[1].description}</p>
            <button
              className="btn btn-black self-end"
              onClick={() => setShowContactForm(true)}
            >
              CONTACT US
            </button>
          </div>
        </Card>
        <Card>
          <div className={style.header}>
            <h1 className="title-small capitalize !leading-normal">
              {PriceListItems[5].options[0].name}
            </h1>
            <div className="relative h-80 w-full">
              <Image
                className="object-cover grayscale contrast-[110%]"
                src="https://res.cloudinary.com/dfzrhlnwe/image/upload/f_auto,q_auto/v1/gym/_DSC0063_thoucq"
                alt="Picture of the author"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>
          <div className={style.body}>
            <div className="flex flex-row justify-between">
              <h3 className="subtitle-verysmall">
                *{PriceListItems[5].options[0].additional}
              </h3>{' '}
              <h3 className="subtitle-verysmall">
                {PriceListItems[5].options[0].price} VND
              </h3>
            </div>
            <p>{PriceListItems[5].options[0].description}</p>
            <button
              className="btn btn-black self-end"
              onClick={() => setShowContactForm(true)}
            >
              CONTACT US
            </button>
          </div>
        </Card>
        <Card>
          <div className={style.header}>
            <h1 className="title-small capitalize !leading-normal">
              {PriceListItems[3].name}
            </h1>
            <div className="relative h-80 w-full">
              <Image
                className="object-cover grayscale contrast-[110%]"
                src="https://res.cloudinary.com/dfzrhlnwe/image/upload/f_auto,q_auto/v1/gym/_DSC0204_bbkx6e"
                alt="Picture of the author"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>
          <div className={style.body}>
            <div className="flex flex-row justify-between">
              <h3 className="subtitle-verysmall">*{PriceListItems[3].additional}</h3>{' '}
              <h3 className="subtitle-verysmall">
                {PriceListItems[3].options[0].price} VND
              </h3>
            </div>
            <p>{PriceListItems[3].description}</p>
            <button
              className="btn btn-black self-end"
              onClick={() => setShowContactForm(true)}
            >
              CONTACT US
            </button>
          </div>
        </Card>
        <Card>
          <div className={style.header}>
            <h1 className="title-small capitalize !leading-normal">
              {PriceListItems[4].name}
            </h1>
            <div className="relative h-80 w-full">
              <Image
                className="object-cover grayscale contrast-[110%]"
                src="https://res.cloudinary.com/dfzrhlnwe/image/upload/f_auto,q_auto/v1/gym/onugbpdjcqy0a8izbmfv"
                alt="Picture of the author"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            </div>
          </div>
          <div className={style.body}>
            <div className="flex flex-row justify-between">
              <h3 className="subtitle-verysmall">*{PriceListItems[4].additional}</h3>{' '}
              <h3 className="subtitle-verysmall">
                {PriceListItems[4].options[0].price} VND
              </h3>
            </div>
            <p>{PriceListItems[4].description}</p>
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
