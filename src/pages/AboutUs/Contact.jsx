import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SiElement } from "react-icons/si";

export default function Contact() {
	return (
		<section className="mx-8 pt-6 text-left mb-10 md:h-screen md:bg-red-500">
			<h2
				id="contact"
				className="font-bold text-center text-2xl md:text-5xl md:ml-7 md:mt-10"
			>
				Contact Us
			</h2>
			<div className=" mt-5 md:justify-evenly md:flex ">
				<p className="flex  flex-rowalign-middle mt-1">
					<AiOutlineMail />
					<a
						className=" hover:text-blue-500 ml-1 "
						href="mailto:contact@altered-blockchain.com"
						target="_blank"
						rel="noreferrer"
					>
						contact@altered-blockchain.com
					</a>
				</p>
				<p className="flex flex-row mt-1">
					<BsTwitter />
					<a
						className="hover:text-blue-500 ml-1 "
						href="#"
						target="_blank"
						rel="noreferrer"
					>
						Altered-Blockchain
					</a>
				</p>
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
