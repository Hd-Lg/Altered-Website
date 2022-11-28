"use client";
import React, { useState } from "react";
import Privacy from "./Privacy";
import TOS from "./TOS";

const Display = () => {
	const [toDisplay, setToDisplay] = useState("");
	return (
		<div>
			<div className="mt-5 grid grid-cols-2 text-center ">
				<div
					onClick={() => setToDisplay("tos")}
					className="border-2 cursor-pointer border-r-0 border-gray-300 rounded-tl-md rounded-bl-md p-1 hover:bg-blue-400">
					<button>Terms of Services</button>
				</div>
				<div
					onClick={() => setToDisplay("pp")}
					className="border-2 cursor-pointer border-gray-300 rounded-tr-md rounded-br-md p-1 hover:bg-blue-400">
					<button>Privacy Policy</button>
				</div>
			</div>
			{toDisplay === "pp" ? <Privacy /> : ""}
			{toDisplay === "tos" ? <TOS /> : ""}
		</div>
	);
};

export default Display;
