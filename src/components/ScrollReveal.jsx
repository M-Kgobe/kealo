import React from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({
	children,
	delay = 0,
	y = 30,
	once = true,
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once }}
			transition={{
				duration: 0.6,
				ease: "easeOut",
				delay,
			}}
		>
			{children}
		</motion.div>
	);
}
