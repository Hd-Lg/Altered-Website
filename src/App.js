import React from "react";
import { Outlet } from "react-router-dom";

import { Copyright, Footer, Navbar } from "./components";

export default function App() {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Copyright />
			<Footer />
		</div>
	);
}
