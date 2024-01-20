import {createContext, useState, useEffect} from 'react';

export const appScrollContext = createContext({
  contactSection: ""
});

export const AppScrollProvider = (({children}) => {
  const [contactSectionId, setContactSectionId] = useState('');

  const handleScroll = (sectionId) => {
    setContactSectionId(sectionId);
  }

  useEffect(() => {
    const contactSection = document.getElementById(contactSectionId);

    if (contactSection) {
      const topOfSection = contactSection.offsetTop - 150;
      window.scrollTo({top: topOfSection, behavior: 'smooth'});
    }
  }, [contactSectionId]);

  const value = {
    handleScroll,
    contactSectionId
  }

  return (
    <appScrollContext.Provider value={value} >
      {children}
    </appScrollContext.Provider>
  )
})
