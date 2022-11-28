import React from "react";
import Projects from "./Projects";

const page = () => {
	return (
		<section>
			<h2 className="font-semibold text-left">Our Portfolio</h2>
			<p className="text-gray-500">
				Discover projects we support at the moment - or plan to support
				in the near future.
			</p>
			<Projects />
		</section>
	);
};

export default page;
