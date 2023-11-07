'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@public/VC-logo-Big.png';
import LogoText from '@public/VC-logo.png';
import style from './header.module.css';
import {useState} from 'react';
import {IoIosArrowDown} from 'react-icons/io';

interface MenuItem {
  title: string;
  dropdown?: boolean;
  options?: {
    title: string;
    onClick?: () => void;
  }[];
}

const menuItems: MenuItem[] = [
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
  {title: 'Contact'},
  {title: 'EN'},
  {title: 'VN'},
];

const Header = () => {
  const [logoShow, setLogoShow] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleMouseEnterLogo = () => {
    setLogoShow(true);
  };
  const handleMouseLeaveLogo = () => {
    setLogoShow(false);
  };
  const handleMouseEnter1 = () => {
    setDropdown1(true);
  };
  const handleMouseLeave1 = () => {
    setDropdown1(false);
  };
  const handleMouseEnter2 = () => {
    setDropdown2(true);
  };
  const handleMouseLeave2 = () => {
    setDropdown2(false);
  };

  return (
    <header className={style.headerBar}>
      <div
        className={style.container}
        onMouseEnter={handleMouseEnterLogo}
        onMouseLeave={handleMouseLeaveLogo}
      >
        <div>
          <div className={style.logoContainer}>
            <Link href={'/'}>
              <Image src={Logo} alt="Vietclimb logo without it's text" fill={true} />
            </Link>
          </div>
          <div
            className={`${style.logoTextContainer} ${logoShow ? style.logoVisible : ''}`}
          >
            <Link href={'/'}>
              <Image src={LogoText} alt="Vietclimb logo with it's text" fill={true} />
            </Link>
          </div>
        </div>
        <div>
          <ul className={style.nav}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={
                  index === 0
                    ? handleMouseEnter1
                    : index === 1
                    ? handleMouseEnter2
                    : undefined
                }
                onMouseLeave={
                  index === 0
                    ? handleMouseLeave1
                    : index === 1
                    ? handleMouseLeave2
                    : undefined
                }
              >
                <button className={style.navItems}>
                  {item.title}
                  {item.dropdown && <IoIosArrowDown className="inline" />}
                </button>
                {item.dropdown && (
                  <ul
                    className={`${style.dropdown} ${
                      index === 0
                        ? dropdown1
                          ? ''
                          : style.hidden
                        : index === 1
                        ? dropdown2
                          ? ''
                          : style.hidden
                        : ''
                    }`}
                  >
                    {item.options?.map((option, index) => (
                      <li key={index}>
                        <button className={style.dropdownItem} onClick={option.onClick!}>
                          {option.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
