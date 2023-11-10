import {useContactForm} from '@/utils/contactFormContext'; // Import the hook

interface MenuItem {
  title: string;
  onClick?: () => void;
  dropdown?: boolean;
  options?: {
    title: string;
    onClick?: () => void;
  }[];
}

export default function useMenuItems(): MenuItem[] {
  const {setShowContactForm} = useContactForm(); // Use the hook to get setShowContactForm

  if (!setShowContactForm) {
    throw new Error('setShowContactForm is undefined');
  }
  return [
    {
      title: 'Info',
      dropdown: true,
      options: [
        {title: 'First time?', onClick: () => console.log('First time?')},
        {title: 'Price List', onClick: () => console.log('Price List')},
        {title: 'Location', onClick: () => console.log('Location')},
        {title: 'History', onClick: () => console.log('History')},
      ],
    },
    {
      title: 'Service',
      dropdown: true,
      options: [
        {title: 'Gym', onClick: () => console.log('Gym')},
        {title: 'Coaching', onClick: () => console.log('Coaching')},
        {title: 'Outdoor', onClick: () => console.log('Outdoor')},
        {title: 'Homestay', onClick: () => console.log('Homestay')},
        {title: 'Construction', onClick: () => console.log('Construction')},
      ],
    },
    {title: 'Blog'},
    {title: 'Contact', onClick: () => setShowContactForm(true)},
    {title: 'EN'},
    {title: 'VN'},
  ];
}
