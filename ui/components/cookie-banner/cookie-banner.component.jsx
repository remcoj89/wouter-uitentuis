'use client';

import Styles from './cookie-banner.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function CookieConsent() {
  const [hasConsented, setHasConsented] = useState(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('consent');
    if (storedConsent) {
      setHasConsented(JSON.parse(storedConsent));
    }
  }, []);

  const handleConsent = (concent) => {
    setHasConsented(concent);
    localStorage.setItem('consent', JSON.stringify(concent));
  };


  return(
    hasConsented === null && (
    <div className={Styles.cookieBanner}>
      <Link href='#'><p>Wij gebruiken <span className={Styles.highligtedText}>cookies</span> op onze website</p></Link>
      <div className={Styles.btnWrapper}>
        <button className={`${Styles.btn} ${Styles.btnDecline}`} onClick={() => handleConsent(false)}>Afwijzen</button>
        <button className={`${Styles.btn} ${Styles.btnAllow}`} onClick={() => handleConsent(true)}>Cookies Toestaan</button>
      </div>
    </div>
    )
  )
}

export default CookieConsent;
