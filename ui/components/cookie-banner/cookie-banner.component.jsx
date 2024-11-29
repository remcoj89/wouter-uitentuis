'use client';

import Styles from './cookie-banner.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function CookieConsent() {
  const [hasConsented, setHasConsented] = useState(false);

  const handleConsent = (concent) => {
    setHasConsented(concent);
  };


  return(
    hasConsented === false && (
    <div className={Styles.cookieBanner}>
      <Link href='#'><p>Wij gebruiken <span className={Styles.highligtedText}>cookies</span> op onze website</p></Link>
      <div className={Styles.btnWrapper}>
        <button className={`${Styles.btn} ${Styles.btnAllow}`} onClick={handleConsent}>Ik Snap het</button>
      </div>
    </div>
    )
  )
}

export default CookieConsent;
