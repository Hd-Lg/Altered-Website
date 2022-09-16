import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SiElement } from "react-icons/si";

export default function Contact() {
	return (
		<section className="mx-8 pt-6 text-left mb-10 md:h-screen">
			<h2 className="font-bold text-center text-2xl md:text-5xl md:ml-7 md:mt-10">
				Contact Us
			</h2>
			<div className=" mt-5 md:justify-evenly md:flex ">
				<div className="flex flex-row w-1/3 mt-1">
					<span className="w-1/3">
						<AiOutlineMail />
					</span>
					<a
						className=" w-2/3 hover:text-blue-500 ml-1 "
						href="mailto:contact@altered-blockchain.com"
						target="_blank"
						rel="noreferrer"
					>
						contact@altered-blockchain.com
					</a>
				</div>
				<div className="flex flex-row w-1/3  mt-1">
					<BsTwitter />
					<a
						className="hover:text-blue-500 ml-1 "
						href="#"
						target="_blank"
						rel="noreferrer"
					>
						Altered-Blockchain
					</a>
				</div>
				<p className="flex flex-row b mt-1">
					<SiElement />
					<a
						className="hover:text-blue-500 ml-1 "
						href="#"
						target="_blank"
						rel="noreferrer"
					>
						Altered-Blockchain
					</a>
				</p>
			</div>
		</section>
	);
}
