'use client'
import { CookieConsentProvider } from "@/lib/CookieConcentContext/CookieConcentContext";

export function Providers({children}) {
  return (
    <CookieConsentProvider>
      {children}
    </CookieConsentProvider>
  )
}
