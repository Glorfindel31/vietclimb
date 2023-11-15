import Image from 'next/image';
import style from './cardContent.module.css';
import {useContactForm} from '@/utils/contactFormContext';

type CardContentProps = {
  title: string;
  additional?: string;
  price: string;
  description?: string;
  emphasized?: boolean;
};

const CardContent: React.FC<CardContentProps> = props => {
  const {setShowContactForm} = useContactForm();
  if (!setShowContactForm) {
    throw new Error('setShowContactForm is undefined');
  }
  return (
    <>
      <div className={style.header}>
        <h1 className="title-small capitalize !leading-normal">{props.title}</h1>
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
          <h3 className="subtitle-verysmall">*{props.additional}</h3>{' '}
          <h3 className="subtitle-verysmall">{props.price} VND</h3>
        </div>
        <p className="h-full">{props.description}</p>
        <button
          className={`btn ${props.emphasized ? 'btn-white' : 'btn-black'} self-end`}
          onClick={() => setShowContactForm(true)}
        >
          BOOK NOW
        </button>
      </div>
    </>
  );
};
export default CardContent;
