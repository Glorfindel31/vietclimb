import {PriceListItems} from '@public/priceListItems';
import style from './priceListSection.module.css';

export default function PriceListSection() {
  return (
    <section className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm m-auto py-8">
      <h1 className="title-verybig">Price List</h1>
      <div className="separator-text my-8"></div>
      <div className={style.container}>
        {PriceListItems.map((item, index) => (
          <div key={index} className={style['service-container']}>
            <div className={style.service}>
              <h1 className="title-small capitalize">{item.name}</h1>
            </div>
            {item.additional ? (
              <h5 className="subtitle-verysmall">*{item.additional}</h5>
            ) : (
              ''
            )}
            <ul className={style['prices-container']}>
              {item.options.map((option, index) => (
                <li key={index} className={style.price}>
                  <h4 className="subtitle-small">{option.name}</h4>
                  <h4 className="subtitle-small">{option.price} VND</h4>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
