'use client';
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

type ContactFormContextType = {
  showContactForm?: boolean;
  setShowContactForm?: Dispatch<SetStateAction<boolean>>;
};

export const ContactFormContext = createContext<ContactFormContextType>({});

type ContactFormProviderProps = {
  children: ReactNode;
};

export const ContactFormProvider = ({children}: ContactFormProviderProps) => {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <ContactFormContext.Provider value={{showContactForm, setShowContactForm}}>
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => {
  const context = useContext(ContactFormContext);

  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }

  return context;
};
