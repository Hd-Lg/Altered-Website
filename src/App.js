import React from "react";
import { Outlet } from "react-router-dom";

import { Copyright, Footer, Navbar } from "./components";

export default function App() {
	return (
		<div className="scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Navbar />
			<Outlet />
			<Copyright />
			<Footer />
		</div>
	);
}
