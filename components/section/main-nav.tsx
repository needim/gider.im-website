"use client";

import Link from "next/link";

import Logo from "@/components/custom/logo";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { MobileNav } from "@/components/section/mobile-nav";

export type MainNavItem = {
	title: string;
	href: string;
	disabled?: boolean;
};

export function MainNav() {
	const segment = useSelectedLayoutSegment();
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: temporary fix
	useEffect(() => {
		setShowMobileMenu(false);
	}, [segment]);

	return (
		<div className="flex gap-6 md:gap-10 px-4 lg:px-0">
			<Link href="/" className="items-center space-x-2 hidden md:flex">
				<motion.div
					transition={{ delay: 0.1 }}
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
			<nav className="hidden gap-6 md:flex">
				<Link href="/roadmap" className="z-10 flex items-center justify-center">
					<div
						className={cn(
							"group rounded-full text-base font-medium transition-all ease-in hover:cursor-pointer hover:bg-zinc-200  dark:hover:bg-zinc-800",
							segment === "roadmap" ? "bg-zinc-100 dark:bg-zinc-900" : "",
						)}
					>
						<div className="inline-flex items-center justify-center px-3 py-1.5 transition ease-out hover:text-zinc-600 hover:duration-300 hover:dark:text-zinc-400">
							<span>Roadmap</span>
						</div>
					</div>
				</Link>
				<Link href="/design" className="z-10 flex items-center justify-center">
					<div
						className={cn(
							"group rounded-full text-base font-medium transition-all ease-in hover:cursor-pointer hover:bg-zinc-200  dark:hover:bg-zinc-800",
							segment === "design" ? "bg-zinc-100 dark:bg-zinc-900" : "",
						)}
					>
						<div className="inline-flex items-center justify-center px-3 py-1.5 transition ease-out hover:text-zinc-600 hover:duration-300 hover:dark:text-zinc-400">
							<span>Design Contest</span>
						</div>
					</div>
				</Link>
			</nav>
			<button
				className="flex items-center space-x-2 md:hidden"
				onClick={() => setShowMobileMenu(!showMobileMenu)}
			>
				{showMobileMenu ? (
					<IconX className="size-8" />
				) : (
					<IconMenu2 className="size-8" />
				)}
				<span className="font-bold">Menu</span>
			</button>
			{showMobileMenu && <MobileNav />}
		</div>
	);
}
