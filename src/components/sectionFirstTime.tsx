'use client';

import Image from 'next/image';
import style from './sectionFirstTime.module.css';

const URL_IMAGE: string =
  'https://res.cloudinary.com/dfzrhlnwe/image/upload/c_scale,w_1200/e_grayscale/f_webp/q_auto:best/gym/_DSC0118_1_p7epwb.jpg';

export default function SectionFirstTime() {
  return (
    <section id="first-time" className="w-screen h-auto">
      <div className={style.container}>
        <div className={style.imgContainer}>
          <h2 className="subTitle">First time climbing?</h2>
          <Image src={URL_IMAGE} layout="fill" alt="illustration picture of a climber" />
        </div>
        <div className={style.textContainer}>
          <h2 className="subTitle">No worries we are here for you.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto officiis
            vitae rerum dicta aliquam tempora quae sequi quos aut. Quis, ipsa omnis
            exercitationem facere tempora illum unde sed excepturi voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto officiis
            vitae rerum dicta aliquam tempora quae sequi quos aut. Quis, ipsa omnis
            exercitationem facere tempora illum unde sed excepturi voluptatum.
          </p>
        </div>
      </div>
    </section>
  );
}
