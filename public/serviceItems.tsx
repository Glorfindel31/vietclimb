import {StaticImageData} from 'next/image';
import AboutImg from '@public/_DSC0043.png';
import ClimberImg from '@public/_DSC0065.png';

interface Item {
  serviceTitle: string;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
}

export const GymServiceItems: Item[] = [
  {
    serviceTitle: 'Gym',
    title: 'Bouldering Wall',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum repellat, asperiores deserunt perspiciatis distinctio quisquam?',
    imageUrl:
      'https://res.cloudinary.com/dfzrhlnwe/image/upload/f_auto,q_auto/v1/gym/zgpbwjfx9krh3xlplr3v',
  },
  {
    serviceTitle: 'Gym',
    title: 'Vietclimb Shop',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum repellat, asperiores deserunt perspiciatis distinctio quisquam?',
    imageUrl: ClimberImg,
  },
  {
    serviceTitle: 'Gym',
    title: 'Bar & Beverages',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum repellat, asperiores deserunt perspiciatis distinctio quisquam?',
    imageUrl: AboutImg,
  },
  {
    serviceTitle: 'Gym',
    title: 'Coaching',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum repellat, asperiores deserunt perspiciatis distinctio quisquam?',
    imageUrl: ClimberImg,
  },
  {
    serviceTitle: 'Gym',
    title: 'Adult Class',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum repellat, asperiores deserunt perspiciatis distinctio quisquam?',
    imageUrl: AboutImg,
  },
  {
    serviceTitle: 'Gym',
    title: 'Kids Class',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum repellat, asperiores deserunt perspiciatis distinctio quisquam?',
    imageUrl: ClimberImg,
  },
];
export const OutdoorSectionItems: Item[] = [
  {
    serviceTitle: 'Outdoor',
    title: 'Climbing trip ine Huu Lung',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quasi rerum dolorem consectetur dolor ad distinctio aperiam ipsam.',
    imageUrl: AboutImg,
  },
  {
    serviceTitle: 'Outdoor',
    title: 'Rental Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quasi rerum dolorem consectetur dolor ad distinctio aperiam ipsam.',
    imageUrl: AboutImg,
  },
  {
    serviceTitle: 'Outdoor',
    title: "Mao's Homestay",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quasi rerum dolorem consectetur dolor ad distinctio aperiam ipsam.',
    imageUrl: ClimberImg,
  },
  {
    serviceTitle: 'Outdoor',
    title: 'Privat Trips',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quasi rerum dolorem consectetur dolor ad distinctio aperiam ipsam.',
    imageUrl: AboutImg,
  },
];
