'use client';
import Image from 'next/image';
import {useContactForm} from '@/utils/contactFormContext';
import AboutImg from '@public/_DSC0043.png';

export default function AboutSection() {
  const {setShowContactForm} = useContactForm();

  if (!setShowContactForm) {
    throw new Error('setShowContactForm is undefined');
  }

  return (
    <section className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm h-screen flex flex-row m-auto py-8">
      <div className="relative flex flex-[2] overflow-hidden items-center">
        <Image
          className="grayscale"
          src={AboutImg}
          alt="Picture of the author"
          style={{objectFit: 'cover', objectPosition: 'center'}}
        />
      </div>
      <div className="flex flex-1 items-center">
        <div className="flex flex-col justify-evenly px-8 h-full overflow-scroll">
          <h1 className="title-small">Lorem ipsum dolor sit amet consectetur?</h1>
          <h3 className="subtitle-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio, dolorem
            praesentium rerum veniam asperiores. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quia obcaecati corrupti, reprehenderit dignissimos deserunt
            in.
          </h3>
          <button onClick={() => setShowContactForm(true)} className="btn btn-black">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}
