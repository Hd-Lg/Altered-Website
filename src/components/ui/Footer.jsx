import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="flex-1 py-6 text-center border-t-2 mx-8">
			{/* <div className="text-lg font-extrabold">
				<p>PAGE TOP PAGE TOP</p>
			</div> */}
			<ul className="md:flex b-5 md:justify-evenly">
				<li>
					<Link to={"/legals"}>Terms of Services</Link>
				</li>
				<li>
					<Link to={"/legals"}>Privacy Policy</Link>
				</li>
				<li>
					<a href="/aboutus">Contact Us</a>
				</li>
			</ul>
		</footer>
	);
}
