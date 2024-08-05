"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			className="relative"
			initial={{ opacity: 0, top: 20 }}
			animate={{ opacity: 1, top: 0 }}
		>
			{children}
		</motion.div>
	);
}
