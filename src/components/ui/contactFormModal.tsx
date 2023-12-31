'use client';
import {useState, useEffect} from 'react';
import {useContactForm} from '@/utils/contactFormContext';
import style from './contactFormModal.module.css';
import {AiOutlineArrowLeft, AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import Link from 'next/link';

const ContactFormModal = () => {
  const {showContactForm, setShowContactForm} = useContactForm();

  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showContactForm]);

  const closeContactFormHandler = () => {
    setShowContactForm?.(false);
  };

  return showContactForm ? (
    <>
      <div className={style.backdrop}></div>
      <div className={style.container}>
        <div className={style.header}>
          <button onClick={closeContactFormHandler} className="btn-icon">
            <AiOutlineArrowLeft />
          </button>
          <h2 className="title-verysmall p-4">You have a Question?</h2>
        </div>
        <form action="" className={style.form}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="email" placeholder="email" />
          <label htmlFor="object">Object</label>
          <input type="text" name="object" id="object" placeholder="object" />
          <label htmlFor="message">What would you want to ask?</label>
          <textarea name="message" id="message" placeholder="message"></textarea>
          <button onClick={closeContactFormHandler} className="btn btn-black">
            SEND
          </button>
        </form>
        <div className={style.headerSocial}>
          <h2 className="title-verysmall">Or contact us via social medias</h2>
        </div>
        <div className={style.social}>
          <ul>
            <li>
              <HiOutlineMail className="inline btn-icon" />
              <Link href={'info@vietclim.vn'}>info@vietclim.vn</Link>
            </li>
            <li>
              <AiOutlineInstagram className="inline btn-icon" />
              <Link href={'#'}>Instagram</Link>
            </li>
            <li>
              <AiOutlineFacebook className="inline btn-icon" />
              <Link href={'#'}>Facebook</Link>
            </li>
          </ul>
        </div>
        <div className={style.empty}></div>
      </div>
    </>
  ) : null;
};

export default ContactFormModal;
