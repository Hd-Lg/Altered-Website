import Image from "next/image";
import Link from "next/link";
import React from "react";

import Favicon from "../assets/Favicon_AB-min.svg";

const Navbar = () => {
	return (
		<nav className="w-full h-24 mb-4 border-b-2">
			<div className="h-10 flex justify-center align-middle p-2">
				<Link href={"/"}>
					<Image src={Favicon} alt="logo" className="w-8 mx-auto" />
				</Link>
			</div>
			<div className="grid grid-cols-3 text-center h-6 text-lg tracking-widest pt-2">
				<Link href={"/"}>Home</Link>
				<Link href={"/portfolio"}>Portfolio</Link>
				<Link href={"/about-us"}>About Us</Link>
			</div>
		</nav>
	);
};

export default Navbar;
