import { Roboto } from "@next/font/google";

import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

const roboto = Roboto({
	weight: "500",
	subsets: ["latin"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={roboto.className}>
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
