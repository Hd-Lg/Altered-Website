import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/Favicon_AB-min.svg";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function Navbar() {
	const [navbar, setNavbar] = useState(false);
	return (
		<nav className="w-full bg-white top-0 left-0 fixed border-b-2">
			<div className="justify-between mx-4 md:items-center md:flex md:px-8">
				<div>
					<div className="flex items-center justify-between py-3">
						<Link to="/">
							<img
								src={Logo}
								style={{
									width: "30px",
									height: "30px",
								}}
								alt="Logo"
							/>
						</Link>
						<div className="md:hidden">
							<button
								className="p-2 text-gray-700"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? <MdClose /> : <GiHamburgerMenu />}
							</button>
						</div>
					</div>
				</div>
				<div
					className={`flex-1 text-right pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
						navbar ? "block" : "hidden"
					}`}
				>
					<ul className="items-center justify-center space-y-8 md:flex md:justify-end md:space-x-20 md:space-y-0 lg:text-xl">
						<li className="text-gray-600 hover:text-blue-600">
							<NavLink
								className={({ isActive }) =>
									isActive ? "border-b-2" : ""
								}
								to="/"
							>
								Home
							</NavLink>
						</li>
						<li className="text-gray-600 hover:text-blue-600">
							<NavLink
								className={({ isActive }) =>
									isActive ? "border-b-2" : ""
								}
								to="/portfolio"
							>
								Portfolio
							</NavLink>
						</li>
						<li className="text-gray-600 hover:text-blue-600">
							<NavLink
								className={({ isActive }) =>
									isActive ? "border-b-2" : ""
								}
								to="/aboutus"
							>
								About Us
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
