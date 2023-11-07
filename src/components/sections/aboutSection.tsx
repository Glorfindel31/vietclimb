import Image from 'next/image';
import Header from '../ui/header';
import AboutImg from '@public/_DSC0043.png';

export default function AboutSection() {
  return (
    <section className="w-screen h-screen flex flex-col justify-between">
      <Header />
      <div className="flex h-full py-20">
        <div className="relative flex flex-[2] overflow-hidden items-center">
          <Image
            className="grayscale"
            src={AboutImg}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-1 items-center">
          <div className="flex flex-col justify-evenly px-8 h-full overflow-scroll">
            <h1 className="title-small">Lorem ipsum dolor sit amet consectetur?</h1>
            <h3 className="subtitle-small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio,
              dolorem praesentium rerum veniam asperiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quia obcaecati corrupti, reprehenderit
              dignissimos deserunt in.
            </h3>
            <button className="btn btn-black">CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  );
}
