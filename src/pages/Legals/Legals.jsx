import React from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfServices from "./TermsOfServices";

export default function Legals({ document }) {
	return (
		<section className="mx-8 mb-11 text-left pt-14">
			<h2 className="my-5 font-bold text-2xl md:text-5xl md:ml-7">
				Altered Blockchain Legals
			</h2>

			<p className="text-gray-500 md:mt-3 md:text-xl">
				You can find on this page some information related to:
			</p>
			<div className="mt-5 grid grid-cols-2 text-center ">
				<div className="border-2 cursor-pointer border-r-0 border-gray-300 rounded-tl-md rounded-bl-md p-1 hover:bg-blue-400">
					<button>Terms of Services</button>
				</div>
				<div className="border-2 cursor-pointer border-gray-300 rounded-tr-md rounded-br-md p-1 hover:bg-blue-400">
					<button>Privacy Policy</button>
				</div>
			</div>
			{/* TODO: Add interactivity, button selected display content */}
			<div>
				<TermsOfServices />
				<PrivacyPolicy />
			</div>
		</section>
	);
}
