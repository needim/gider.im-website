"use client";

import Link from "next/link";

import Logo from "@/components/custom/logo";
import { motion } from "framer-motion";

export type MainNavItem = {
	title: string;
	href: string;
	disabled?: boolean;
};

export function MainNav() {
	return (
		<div className="flex gap-6 md:gap-10 px-4 lg:px-0">
			<Link href="/" className="items-center space-x-2 flex">
				<motion.div
					transition={{ delay: 1 }}
					initial={{
						rotate: 45,
					}}
					animate={{
						rotate: 0,
					}}
					className="relative"
				>
					<Logo className="size-10" />
				</motion.div>
				<span className="font-bold inline-block">gider.im</span>
			</Link>
		</div>
	);
}
