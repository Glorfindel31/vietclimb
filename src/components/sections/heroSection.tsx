import Image from 'next/image';
import HeroImg from '@public/_DSC0065.png';

export default function HeroSection() {
  return (
    <section className="w-screen h-screen flex flex-row">
      <div className="flex items-center flex-1">
        <div className="flex flex-col gap-8 px-8">
          <h1 className="title-big">Lorem ipsum dolor sit!</h1>
          <h3 className="subtitle-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio, dolorem
            praesentium rerum veniam asperiores.
          </h3>
          <button className="btn btn-black">FIND US NOW</button>
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center overflow-hidden">
        <Image
          className="object-cover grayscale"
          src={HeroImg}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
