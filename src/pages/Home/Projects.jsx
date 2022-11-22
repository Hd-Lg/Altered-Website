import React from "react";
import Card from "./Card";

import { BiServer } from "react-icons/bi";

export default function Projects() {
	return (
		<div className="mx-8 my-8 text-left md:pt-2">
			<h2 className="my-5 font-bold text-2xl md:text-5xl md:ml-7">
				Projects We Support
			</h2>
			<p className="text-gray-500 md:text-xl md:mt-3">
				Have a quick look at some projects we currently or plan to
				support:
			</p>
			<div className="grid-cols-1">
				<Card text="Syntropy ($NOIA)" icon={<BiServer />} />
				<Card text="Cardano ($ADA)" icon={<BiServer />} />
				<Card text="OXEN ($OXEN)" icon={<BiServer />} />
				<Card text="Mysterium Network" icon={<BiServer />} />
			</div>
		</div>
	);
}
