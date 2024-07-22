import NavTop from './navTop';
import Navbar from './navbar';
import Footer from './footer';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
	title: 'YMCA of the Pikes Peak Region',
	description: 'Welcome to the YMCA of the Pikes Peak Region! Our mission is to put Christian principles into practice through programs that build healthy spirit mind and body for all.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
        <Analytics />
        <SpeedInsights />
        <NavTop />
				<Navbar />
				<div className="body-container">{children}</div>
        <Footer />
			</body>
		</html>
	);
}
