import React from "react";
import Error404 from "../../assets/not-found-404error.gif";

export default function NotFound() {
	return (
		<section className="h-screen mx-8 my-20">
			<h2 className="my-5 font-bold text-2xl md:text-5xl md:ml-7">
				Error 404
			</h2>
			<p className="text-gray-500 md:text-xl md:mt-3">
				Oops... Page not found.
			</p>
			<img className="mx-auto" src={Error404} alt="Error 404" />
		</section>
	);
}
