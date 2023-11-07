import Image from 'next/image';
import AboutImg from '@public/_DSC0043.png';

export default function GymSection() {
  return (
    <section className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm h-screen flex flex-row m-auto">
      <div className="flex h-full py-20">
        <div className="flex flex-1 items-center">
          <div className="flex flex-col justify-evenly px-8 h-full overflow-scroll">
            <h1 className="title-small">Gym</h1>
            <ul className="title-verysmall flex flex-col gap-4">
              <li>Bouldering Wall</li>
              <li className="subtitle-verysmall">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum
                repellat, asperiores deserunt perspiciatis distinctio quisquam?
              </li>
              <li>Vietclimb Shop</li>
              <li>Bar & Beverages</li>
              <li>Coaching</li>
              <li>Adult Class</li>
              <li>Kids Class</li>
            </ul>
          </div>
        </div>
        <div className="relative flex flex-[2] overflow-hidden items-center">
          <Image
            className="grayscale"
            src={AboutImg}
            alt="Picture of the author"
            style={{objectFit: 'cover', objectPosition: 'center'}}
          />
        </div>
      </div>
    </section>
  );
}
