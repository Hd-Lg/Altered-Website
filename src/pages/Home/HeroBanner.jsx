import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1 } },
};

const pathVariants = {
	hidden: { opacity: 0, pathLength: 0 },
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: { duration: 2, ease: "easeInOut" },
	},
};

export default function HeroBanner() {
	return (
		<div className="h-screen mx-8 pt-14 text-center">
			<div className="mt-10 mb-32 w-auto h-5 md:mb-48 lg:mb-80">
				<motion.svg
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					x="0"
					y="0"
					viewBox="0 0 708.66 141.73"
					enable-background="new 0 0 708.66 141.73"
					variants={svgVariants}
					initial="hidden"
					animate="visible">
					<motion.text
						transform="matrix(.75 0 0 1 50.668 89.348)"
						fill="#1d1e1c"
						fontFamily="SpaceMono-Regular&apos"
						fontSize="61px"
						variants={pathVariants}>
						ALTERED
					</motion.text>

					<motion.text
						transform="matrix(.75 0 0 1 388.536 90.256)"
						fill="#1d1e1c"
						fontFamily="SpaceMono-Regular&apos"
						fontSize="61px"
						variants={pathVariants}>
						BLOCKCHAIN
					</motion.text>
					{/* Bar circling letters */}
					<motion.path
						fill="none"
						stroke="#000"
						stroke-width="6"
						stroke-miterlimit="10"
						d="M348.15 23.99h-56.23l-28.11 49 28.11 49h56.23l28.11-49z"
						variants={pathVariants}
					/>
					{/* Bar between letters */}
					<motion.path
						fill="none"
						stroke="#000"
						stroke-miterlimit="10"
						d="M309.4 70.49h21.88"
						variants={pathVariants}
					/>
					<text
						transform="translate(306.609 111.898)"
						fill="#1d1d1b"
						fontFamily="'MyriadPro-Regular&apos"
						fontSize="48px">
						B
					</text>
					<text
						transform="translate(306.665 64.185)"
						fill="#1d1d1b"
						fontFamily="'MyriadPro-Regular&apos"
						fontSize="48px">
						A
					</text>
				</motion.svg>
			</div>
			<h1 className="my-5 font-bold tracking-wider text-5xl md:text-7xl">
				Welcome
			</h1>
			<p className="text-gray-500 md:mt-24 md:text-xl">
				We are <strong>Validators</strong>, we run
				<strong> Stake Pool</strong> and <strong>Masternodes </strong>
				for various blockchain projects in which we are convince of
				their potential to grow, develop and bring change.
			</p>
			<p className="text-gray-500 md:mt-10 md:text-xl">
				We know it's important to choose a reliable validator when
				stacking your cryptocurrencies. Become our partner to grow with
				us in this new world full of opportunities.
			</p>
		</div>
	);
}
