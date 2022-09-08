import React from "react";

import "./Copyright.css";

export default function Copyright() {
	return (
		<div className="copyright flex items-center mb-4 fixed whitespace-nowrap left-0 bottom-0 tracking-wider">
			<small className="text-opacity-40 text-xs pb-4 text-gray-800">
				© Altered-Blockchain - All right reserved.
			</small>
			<p className="font-extrabold text-lg">SCROLL DOWN</p>
		</div>
	);
}
