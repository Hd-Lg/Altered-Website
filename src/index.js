import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

import "./index.css";

import "@fontsource/noto-sans-jp";
import "@fontsource/roboto";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AnimatedRoutes />
	</BrowserRouter>
);
