import React from "react";
import Presentation from "./Presentation";
import Contact from "./Contact";

import { motion } from "framer-motion";

const pageVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
	exit: {
		x: "-100vw",
		transition: {
			ease: "easeInOut",
		},
	},
};

export default function AboutUs() {
	return (
		<motion.section initial={pageVariants.hidden} animate={pageVariants.visible} exit={pageVariants.exit} >
			<Presentation />
			<Contact />
		</motion.section>
	);
}
