import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function AnimatedGradientSponsorText({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ff2d551f] backdrop-blur-sm duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#ff2d553f] dark:bg-black/40 dark:hover:bg-red-950 hover:bg-red-50 transition-all",
				className,
			)}
		>
			<div
				className={
					"absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#aaa]/50 via-red-600/50 to-[#aaa]/50 bg-[length:var(--bg-size)_100%] p-[2px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
				}
			/>

			{children}
		</div>
	);
}
