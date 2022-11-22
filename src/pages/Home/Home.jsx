import React from "react";
import HeroBanner from "./HeroBanner";
import Projects from "./Projects";
import Delegate from "./Delegate";

import { motion } from "framer-motion";

const pageVariants = {
	hidden: {},
	visible: {},
	exit: {
		x: "-100vw",
		transition: {
			ease: "easeInOut",
		},
	},
};

export default function Home() {
	return (
		<motion.div
			initial={pageVariants.hidden}
			animate={pageVariants.visible}
			exit={pageVariants.exit}
			className="snap-y snap-mandatory overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<section className="snap-start">
				<HeroBanner />
			</section>
			<section className="snap-center">
				<Projects />
			</section>
			<section className="snap-center">
				<Delegate />
			</section>
		</motion.div>
	);
}
