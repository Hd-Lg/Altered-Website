import Image from "next/image";
import React from "react";

const Card = ({ image, text }) => {
	return (
		<div className="flex space-x-4 border-2 rounded-full p-3">
			<Image src={image} alt={"icon"} className="justify-items-start" />
			<p className="text-left tracking-wide">{text}</p>
		</div>
	);
};

export default Card;
