import Image from 'next/image';
import AboutImg from '@public/_DSC0043.png';

export default function outdoorSection() {
  return (
    <section className="w-screen h-screen flex flex-col justify-between">
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
            <h1 className="title-small">Outdoor</h1>
            <ul className="title-verysmall flex flex-col gap-4">
              <li>Climbing trip ine Huu Lung</li>
              <li className="subtitle-verysmall">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum
                repellat, asperiores deserunt perspiciatis distinctio quisquam?
              </li>
              <li>Rental Space</li>
              <li>Mao&apos;s Homestay</li>
              <li>Privat Trips</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
