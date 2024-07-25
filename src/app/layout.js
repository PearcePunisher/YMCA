import NavTop from './navTop';
import Navbar from './navbar';
import Footer from './footer';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: 'YMCA of the Pikes Peak Region',
  description: 'Welcome to the YMCA of the Pikes Peak Region! Our mission is to put Christian principles into practice through programs that build healthy spirit mind and body for all.',
};

export default function RootLayout({ children }) {
  console.log('RootLayout initialized');

  return (
    <html lang="en">
      <body>
        <Analytics />
        <SpeedInsights />
        <div className="sticky top-0 z-10">
          <NavTop />
          <Navbar />
        </div>
        <div className="body-container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
