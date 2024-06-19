'use client';

import Styles from './cookie-banner.module.css';
import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '../../../lib/storage-helper/storage-helper';
import { useState, useEffect } from 'react';

export default function CookieBanner(){
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect (() => {
      const storedCookieConsent = getLocalStorage("cookie_consent", null)

      setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'
    window.gtag("consent", 'update', {
      'analytics_storage': newValue
    });
    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);


  return(
    <div className={Styles.cookieBanner} style={{ display: cookieConsent != null ? "none" : "flex" }}>
      <Link href='#'><p>Wij gebruiken <span className={Styles.highligtedText}>cookies</span> op onze website</p></Link>
      <div className={Styles.btnWrapper}>
        <button className={`${Styles.btn} ${Styles.btnDecline}`} onClick={() => setCookieConsent(false)}>Afwijzen</button>
        <button className={`${Styles.btn} ${Styles.btnAllow}`} onClick={() => setCookieConsent(true)}>Cookies Toestaan</button>
      </div>
    </div>
  )
}
