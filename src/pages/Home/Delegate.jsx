import React from "react";
import Card from "./Card";

import { BiServer } from "react-icons/bi";

export default function Delegate() {
	return (
		<div className="mx-8 my-8 text-left mb-72 md:pt-2">
			<h2 className="my-5 font-bold text-2xl md:text-5xl md:ml-7">
				Why Delegate With Us?
			</h2>
			<p className="text-gray-500 md:text-xl md:mt-3">
				We aim to provide enterprise-class stability and performance for
				our servers by using an hybrid model between dedicated and
				virtual ones in multiple data centers around the world.
			</p>
			<p className="text-gray-500 md:text-xl md:mt-3">
				Whenever the needs of the blockchain projects change, our setup
				will scale easily to exceed them providing us with a safety
				margin for our operations.
			</p>

			<Card text="99.95% Uptime" icon={<BiServer />} />
			<Card text="Monitoring 24/7" icon={<BiServer />} />
			<Card text="Multi-layered Security" icon={<BiServer />} />
			<Card text="Server Redundancy" icon={<BiServer />} />
			<Card text="DDOS Mitigation" icon={<BiServer />} />
			<Card text="Hybrid Model" icon={<BiServer />} />
			<Card text="Automatic Backups" icon={<BiServer />} />

			<h4 className="my-5 font-bold text-lg md:text-xl md:ml-7">
				Worldwide Infrastructure
			</h4>
			<p className="text-gray-500 md:text-xl md:mt-3">
				We run our servers in various geographical zone through various
				providers.
			</p>
		</div>
	);
}
