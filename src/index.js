import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import { Portfolio, AboutUs, NotFound, Home, Legals } from "./pages";

import "@fontsource/noto-sans-jp";
import "@fontsource/roboto";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/legals" element={<Legals />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</React.StrictMode>
	</BrowserRouter>
);
