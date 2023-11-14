interface Option {
  name: string;
  additional?: string;
  price: string;
}

interface Service {
  additional?: string;
  name: string;
  options: Option[];
}

export const PriceListItems: Service[] = [
  {
    name: 'premium member',
    additional: 'Unlimited group classes',
    options: [
      {
        name: '1 month',
        price: '1,600,000',
      },
      {
        name: '3 months',
        price: '4,000,000',
      },
      {
        name: '6 months',
        price: '6,600,000',
      },
      {
        name: '12 months',
        price: '11,500,000',
      },
    ],
  },
  {
    name: 'member',
    options: [
      {
        name: '1 month',
        price: '1,400,000',
      },
      {
        name: '3 months',
        price: '3,400,000',
      },
      {
        name: '6 months',
        price: '5,700,000',
      },
      {
        name: '12 months',
        price: '9,800,000',
      },
    ],
  },
  {
    name: 'kids member',
    options: [
      {
        name: '1 month',
        price: '1,200,000',
      },
      {
        name: '3 months',
        price: '2,800,000',
      },
      {
        name: '6 months',
        price: '4,800,000',
      },
      {
        name: '12 months',
        price: '8,500,000',
      },
    ],
  },
  {
    name: 'group class (adult)',
    additional: '2 hours, Tuesday, Wednesday, Friday',
    options: [
      {
        name: '1 class',
        price: '350,000',
      },
      {
        name: '4 classes',
        price: '1,200,000',
      },
      {
        name: '8 classes',
        price: '2,200,000',
      },
    ],
  },
  {
    name: 'group class (kid Under 14)',
    additional: '1h Tuesday',
    options: [
      {
        name: '1 class',
        price: '250,000',
      },
      {
        name: '4 classes',
        price: '900,000',
      },
      {
        name: '8 classes',
        price: '1,500,000',
      },
    ],
  },
  {
    name: 'class',
    options: [
      {
        name: '1 0n 1 class',
        additional: '1 hour',
        price: '500,000',
      },
      {
        name: 'introduction class',
        additional: '30 minutes',
        price: '350,000',
      },
    ],
  },
  {
    name: 'day pass',
    options: [
      {
        name: '1 day pass',
        price: '180,000',
      },
      {
        name: '10 day pass',
        price: '1,600,000',
      },
    ],
  },
  {
    name: 'kid pass',
    options: [
      {
        name: '1 day pass',
        price: '120,000',
      },
      {
        name: '10 day pass',
        price: '1,080,000',
      },
    ],
  },
  {
    name: 'rental',
    options: [
      {
        name: 'shoes',
        price: '30,000',
      },
      {
        name: 'chalk bag',
        price: '30,000',
      },
    ],
  },
];
