// Styling
import { openSans } from "@/utils/fonts/fonts";
import "./globals.css";


// Components
import FooterSection from "@/ui/sections/footer-section/footer-section.component";
import NavBar from "@/ui/sections/nav-bar/nav-bar.component";


export const metadata = {
  title: "Wouter Uitentuis",
  description: "Field management en agrarische dienst verlening",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={openSans.className}>
        <NavBar />
        {children}
        <FooterSection />
        {/* <CookieConsent /> */}
      </body>
    </html>
  );
}
