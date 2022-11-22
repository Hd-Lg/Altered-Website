import React from "react";
import Presentation from "./Presentation";
import Projects from "./Projects";

import { motion } from 'framer-motion'

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

export default function Portfolio() {
	return (
		<motion.section initial={pageVariants.hidden} animate={pageVariants.visible} exit={pageVariants.exit}>
			<Presentation />
			<Projects />
		</motion.section>
	);
}
