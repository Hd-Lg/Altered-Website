import React from "react";

export default function Card({ icon, text }) {
	return (
		<div className="flex flex-row border-2 rounded-lg cursor-pointer mt-5 w-full hover:scale-110 hover:transition-transform">
			{/* Left Side */}
			<div className="flex justify-center my-auto w-1/5">{icon}</div>
			{/* Right Side */}
			<div className="w-4/5">
				<p className="text-xl text-gray-600 md:text-xl mb-2 p-1">
					{text}
				</p>
			</div>
		</div>
	);
}
