// Styling
import { openSans } from "@/utils/fonts/fonts";
import "./globals.css";


// Components
import FooterSection from "@/ui/sections/footer-section/footer-section.component";
import NavBar from "@/ui/sections/nav-bar/nav-bar.component";
import CookieConsent from "@/ui/components/cookie-banner/cookie-banner.component";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={openSans.className}>
        <NavBar />
        {children}
        <FooterSection />
        <CookieConsent />
      </body>
    </html>
  );
}
