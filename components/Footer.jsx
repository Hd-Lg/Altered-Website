import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="border-t-2 ml-8 h-24 bottom-0">
			<div className="grid grid-cols-3 text-center mx-auto mt-4">
				<Link href={"/legals"}>Terms of Services</Link>
				<Link href={"/legals"}>Privacy Policy</Link>
				<Link href={"/about-us"}>Contact Us</Link>
			</div>
		</footer>
	);
};

export default Footer;
