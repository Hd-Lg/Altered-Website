 import React from "react";
import HeroBanner from "./HeroBanner";
import Projects from "./Projects";
import Delegate from "./Delegate";

export default function Home() {
	return (
		<div>
			<HeroBanner />
			<Projects />
			<Delegate />
		</div>
	);
}
