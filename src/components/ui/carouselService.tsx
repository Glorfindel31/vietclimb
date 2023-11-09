'use client';

import {useState} from 'react';
import Image from 'next/image';
import {StaticImageData} from 'next/image';

interface Item {
  serviceTitle: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
}
interface CarouselServiceProps {
  items: Item[];
}

export default function CarouselService({
  items,
  row,
}: CarouselServiceProps & {row?: string}) {
  const [activeItem, setActiveItem] = useState<number>(0);
  return (
    <div className={`flex h-full w-full py-20 ${row}`}>
      <div className="flex flex-1 items-center">
        <div className="flex flex-col px-8 h-full overflow-scroll">
          {items.map((item, index) => (
            <div key={index}>
              {index === 0 && <h1 className="title-small my-10">{item.serviceTitle}</h1>}
            </div>
          ))}
          <ul className="flex flex-col gap-4">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  className="btn-ghost title-verysmall"
                  onClick={() => setActiveItem(index)}
                >
                  {item.title}
                </button>
                <p
                  className="overflow-hidden pt-2"
                  style={{
                    maxHeight: activeItem === index ? '10rem' : '0rem',
                    transition: 'max-height 0.5s ease-out',
                  }}
                >
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={'flex flex-[2] overflow-hidden items-center relative'}>
        {items.map((item, index) => (
          <Image
            key={index}
            className="grayscale"
            src={item.imageUrl}
            alt="Picture of the author"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              transform: activeItem === index ? 'translateY(0)' : 'translateY(-100%)',
              transition: 'transform 0.5s ease-in-out',
            }}
          />
        ))}
      </div>
    </div>
  );
}
