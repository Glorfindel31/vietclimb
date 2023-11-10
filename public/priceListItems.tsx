interface Item {
  gymServices: {
    membership: {
      'premium member': {
        additional: string;
        '1 month': string;
        '3 months': string;
        '6 months': string;
        '12 months': string;
      };
      member: {
        '1 month': string;
        '3 months': string;
        '6 months': string;
        '12 months': string;
      };
      'kids member': {
        additional: string;
        '1 month': string;
        '3 months': string;
        '6 months': string;
        '12 months': string;
      };
    };
    daypass: {
      'day pass': string;
      '10 punch pass': string;
      'kids day pass': string;
      '10 kids punch pass': string;
    };
    classes: {
      additional: string;
      introduction: {
        '30 min': string;
      };
      privat: {
        '1 hour': string;
      };
      group: {
        additional: string;
        'step in adults': string;
        'step in kids': string;
        '4 classes adults': string;
        '8 classes adults': string;
        '4 classes kids': string;
        '8 classes kids': string;
      };
    };
    rental: {
      shoes: string;
      'chalk bag': string;
    };
  };
}

export const PriceListItems: Item[] = [
  {
    gymServices: {
      membership: {
        'premium member': {
          additional: 'Unlimited group classes',
          '1 month': '1,600,000',
          '3 months': '4,000,000',
          '6 months': '6,600,000',
          '12 months': '11,500,000',
        },
        member: {
          '1 month': '1,400,000',
          '3 months': '3,400,000',
          '6 months': '5,700,000',
          '12 months': '9,800,000',
        },
        'kids member': {
          additional: 'under 14 years old',
          '1 month': '1,200,000',
          '3 months': '2,800,000',
          '6 months': '4,800,000',
          '12 months': '8,500,000',
        },
      },
      daypass: {
        'day pass': '180,000',
        '10 punch pass': '1,600,000',
        'kids day pass': '150,000',
        '10 kids punch pass': '1,300,000',
      },
      classes: {
        additional: 'class price includes day pass',
        introduction: {
          '30 min': '350,000',
        },
        privat: {
          '1 hour': '500,000',
        },
        group: {
          additional: 'adult class 2h, kids class 1h',
          'step in adults': '350,000',
          'step in kids': '250,000',
          '4 classes adults': '1,200,000',
          '8 classes adults': '2,200,000',
          '4 classes kids': '900,000',
          '8 classes kids': '1,500,000',
        },
      },
      rental: {
        shoes: '50,000',
        'chalk bag': '20,000',
      },
    },
  },
];
