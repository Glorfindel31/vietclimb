'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@public/VC-logo-Big.png';
import style from './header.module.css';
import {useState, useEffect} from 'react';
import {IoIosArrowDown} from 'react-icons/io';
import {useContactForm} from '@/utils/contactFormContext';
import useMenuItems from '@public/menuItems';

const Header = () => {
  const menuItems = useMenuItems();
  const {setShowContactForm} = useContactForm();
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  if (!setShowContactForm) {
    throw new Error('setShowContactForm is undefined');
  }

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

  useEffect(() => {
    const checkScroll = () => {
      let headerElement = document.getElementById('header');
      if (headerElement) {
        if (window.scrollY > window.innerHeight * 0.9) {
          headerElement.classList.add(style.navFixed);
        } else {
          headerElement.classList.remove(style.navFixed);
        }
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div id="header" className="w-full">
      <header className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm flex flex-row m-auto w-full justify-between">
        <div className={style.logoContainer}>
          <Link href={'/'}>
            <Image src={Logo} alt="Vietclimb logo without it's text" fill={true} />
          </Link>
        </div>

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
              <button className={style.navItems} onClick={item.onClick!}>
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
      </header>
    </div>
  );
};

export default Header;
