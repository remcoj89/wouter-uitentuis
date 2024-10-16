// Styling
import { openSans } from "@/utils/fonts/fonts";
import "./globals.css";
// import GoogleAnalytics from "@/lib/google-analytics/googleAnalytics";
import CookieBanner from "@/ui/components/cookie-banner/cookie-banner.component";
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
        {/* <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID}/> */}
        <NavBar />
        {children}
        <FooterSection />
        {/* <CookieBanner /> */}
      </body>
    </html>
  );
}
