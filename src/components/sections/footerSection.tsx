'use client';
import {useContactForm} from '@/utils/contactFormContext';

export default function Footer() {
  const {setShowContactForm} = useContactForm();
  if (!setShowContactForm) {
    throw new Error('setShowContactForm is undefined');
  }
  return (
    <footer
      className="w-screen flex flex-col justify-center items-center p-40 gap-8 m-0"
      style={{
        color: 'rgb(var(--color-background))',
        backgroundColor: 'rgb(var(--color-text))',
      }}
    >
      <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-md sm:max-w-sm h-screen flex flex-row m-auto">
        <div className="flex flex-row w-full gap-4">
          <div className="flex-1">
            <div className="separator-background"></div>
            <div className="flex flex-row gap-[40%]">
              <ul>
                <li>Sorem</li>
                <li>Sorem</li>
                <li>Sorem</li>
                <li>Sorem</li>
                <li>Sorem</li>
              </ul>
              <ul>
                <li>Sorem</li>
                <li>Sorem</li>
                <li>Sorem</li>
                <li>Sorem</li>
                <li>Sorem</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="separator-background w-full"></div>
            <button onClick={() => setShowContactForm(true)} className="btn btn-white">
              CONTACT US
            </button>
          </div>
        </div>
        <p>vietclimb all right reserved, copyright &copy; 2023</p>
      </div>
    </footer>
  );
}
