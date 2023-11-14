'use client';
import {useContactForm} from '@/utils/contactFormContext';
import style from './card.module.css';
import Image from 'next/image';

export default function Card(props: {
  title: string;
  content: string;
  url: string;
  details: string;
  price: string;
  imageCentering?: string | undefined;
}) {
  const {setShowContactForm} = useContactForm();
  if (!setShowContactForm) {
    throw new Error('setShowContactForm is undefined');
  }
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className="title-small capitalize !leading-normal">{props.title}</h1>
        <div className="relative h-80 w-full">
          <Image
            className="object-cover grayscale contrast-[110%]"
            src={props.url}
            alt="Picture of the author"
            fill
            style={{objectFit: 'cover', objectPosition: props.imageCentering || 'center'}}
          />
        </div>
      </div>
      <div className={style.body}>
        <div className="flex flex-row justify-between">
          <h3 className="subtitle-verysmall">*{props.details}</h3>{' '}
          <h3 className="subtitle-verysmall">{props.price} VND</h3>
        </div>
        <p>{props.content}</p>
        <button
          className="btn btn-black self-end"
          onClick={() => setShowContactForm(true)}
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}
