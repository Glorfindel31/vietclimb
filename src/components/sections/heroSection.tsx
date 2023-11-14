'use client';
import Image from 'next/image';
const HeroImg: string =
  'https://res.cloudinary.com/dfzrhlnwe/image/upload/f_auto,q_auto/v1/gym/_DSC0092_1_jvrvu8';

export default function HeroSection() {
  const scrollIntoViewHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const infoSection = document.getElementById('infoSection');
    e.preventDefault();
    if (infoSection) {
      infoSection.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    }
  };

  return (
    <section className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm h-screen flex flex-row m-auto">
      <div className="flex items-center flex-1">
        <div className="flex flex-col gap-8 px-8">
          <h1 className="title-big">Lorem ipsum dolor sit!</h1>
          <h3 className="subtitle-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio, dolorem
            praesentium rerum veniam asperiores.
          </h3>
          <button onClick={scrollIntoViewHandler} className="btn btn-black">
            FIND US NOW
          </button>
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center overflow-hidden">
        <Image
          className="object-cover grayscale contrast-[110%]"
          src={HeroImg}
          alt="Picture of the author"
          fill
          style={{objectFit: 'cover', objectPosition: 'center'}}
        />
      </div>
    </section>
  );
}
