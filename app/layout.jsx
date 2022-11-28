import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<Navbar />
				<main className="mx-8 mb-10">{children}</main>
				<Copyright />
				<Footer />
			</body>
		</html>
	);
}
