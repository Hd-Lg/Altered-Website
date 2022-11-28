import React from "react";
import Display from "./Display";


const page = () => {
	return (
		<section>
			<h2 className="font-semibold text-left">
				Altered-Blockchain Legals
			</h2>
			<p className="text-gray-500 ">
				You can find on this page some information related to:
			</p>
			<div>
				<Display />
			</div>
		</section>
	);
};

export default page;
