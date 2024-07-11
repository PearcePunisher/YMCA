import Navbar from './navbar';
import Footer from './footer';
import './globals.css';

export const metadata = {
	title: 'YMCA of the Pikes Peak Region',
	description: 'Welcome to the YMCA of the Pikes Peak Region! Our mission is to put Christian principles into practice through programs that build healthy spirit mind and body for all.  ',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<div className="container">{children}</div>
        <Footer />
			</body>
		</html>
	);
}
