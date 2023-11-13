import {useContactForm} from '@/utils/contactFormContext'; // Import the hook

interface MenuItem {
  title: string;
  href?: string;
  onClick?: () => void;
  dropdown?: boolean;
  options?: {
    title: string;
    href?: string;
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
        {title: 'First time?', href: '/first-time'},
        {title: 'Price List', href: '/pricelist'},
        {title: 'Location', href: '/location'},
        {title: 'History', href: '/history'},
      ],
    },
    {
      title: 'Service',
      dropdown: true,
      options: [
        {title: 'Gym', href: '/gym'},
        {title: 'Coaching', href: '/coaching'},
        {title: 'Outdoor', href: '/outdoor'},
        {title: 'Homestay', href: '/homestay'},
        {title: 'Construction', href: '/construction'},
      ],
    },
    {title: 'Blog', href: '/blog'},
    {title: 'Contact', onClick: () => setShowContactForm(true)},
    {title: 'EN', href: '/en'},
    {title: 'VN', href: '/vn'},
  ];
}
