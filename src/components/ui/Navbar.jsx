import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const svgVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1 } },
};

const pathVariants = {
	hidden: { opacity: 0, pathLength: 0 },
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: { duration: 2, ease: "easeInOut" },
	},
};

export default function Navbar() {
	const [navbar, setNavbar] = useState(false);
	return (
		<nav className="w-full bg-white top-0 left-0 fixed border-b-2">
			<div className="justify-between mx-4 md:items-center md:flex md:px-8">
				<div>
					<div className="flex items-center justify-between py-3">
						<Link to="/">
							<motion.svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 130.39 113.39"
								enable-background="new 0 0 130.39 113.39"
								variants={svgVariants}
								initial="hidden"
								animate="visible"
								style={{
									width: "30px",
									height: "30px",
								}}
							>
								<motion.path
									fill="none"
									stroke="#000"
									stroke-width="6"
									stroke-miterlimit="10"
									d="M93.31 7.69H37.08l-28.11 49 28.11 49h56.23l28.11-49z"
									variants={pathVariants}
								/>
								<motion.path
									d="M71.57 37.79H59.05l-2.13 7.31h-3.76L62 15.7h6.6l8.84 29.4h-3.76l-2.11-7.31zm-6.51-20.58-5.05 17.3h10.6l-5.05-17.3h-.5z"
									variants={pathVariants}
								/>
								<motion.path
									fill="none"
									d="M52.38 59h26.63v36H52.38z"
									variants={pathVariants}
								/>
								<text
									transform="translate(52.375 93.08)"
									font-size="48px"
									font-family="MyriadPro-Regular"
								>
									B
								</text>
								<path
									fill="none"
									stroke="#000"
									stroke-miterlimit="10"
									d="M54.56 54.19h21.87"
								/>
							</motion.svg>
							{/* <motion.img
								src={Logo}
								
								alt="Logo"
								variants={svgVariants}
								initial="hidden"
								animate="visible"
							/> */}
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
