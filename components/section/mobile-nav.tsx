import type * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body";
import Logo from "@/components/custom/logo";
import { motion } from "framer-motion";

interface MobileNavProps {
	children?: React.ReactNode;
}

export function MobileNav({ children }: MobileNavProps) {
	useLockBody();

	return (
		<div
			className={cn(
				"fixed inset-0 top-28 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32  animate-in slide-in-from-bottom-80 md:hidden",
			)}
		>
			<div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-2xl dark:shadow-zinc-900/60">
				<Link href="/" className="flex items-center space-x-2">
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
						<Logo className="size-8" />
					</motion.div>
					<span className="font-bold">gider.im</span>
				</Link>
				<nav className="grid grid-flow-row auto-rows-max text-sm">
					<Link
						href="/roadmap"
						className={cn(
							"flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
						)}
					>
						Roadmap
					</Link>
					<Link
						href="/design"
						className={cn(
							"flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
						)}
					>
						Design Contest
					</Link>
				</nav>
				{children}
			</div>
		</div>
	);
}
