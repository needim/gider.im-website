import HyperText from "@/components/ui/hyper-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { PWA_LINK } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

export function Hero(): React.ReactElement {
	return (
		<div className="relative">
			{/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
				<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-[6px] ring-background border-2 border-zinc-300 hover:border-zinc-400 transition-all ">
					<Strong>Sync</Strong> feature is live.{" "}
					<Link href="#" className="font-medium text-blue-500">
						<span aria-hidden="true" className="absolute inset-0" />
						<span className="inline-flex items-center gap-1">
							Read more{" "}
							<IconArrowRight className="size-3 inline-block stroke-[3px]" />
						</span>
					</Link>
				</div>
			</div> */}
			<h1 className="mx-auto max-w-2xl text-balance text-center font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-7xl lg:mt-8 !leading">
				Privacy focused, <span className="text-[#10B79B]">income</span>,{" "}
				<span className="text-[#F05D48]">expense</span> &{" "}
				<span className="text-[#EDB403]">asset</span> tracking.
			</h1>
			<p className="mx-auto mt-6 max-w-2xl text-balance text-center text-lg tracking-tight text-muted-foreground">
				Open source,{" "}
				<span className="whitespace-nowrap">
					<HyperText
						className="text-foreground font-medium underline underline-offset-[2.7px]"
						text="encrypted"
					/>
					,
				</span>{" "}
				no <span className="strikethrough">ads</span> &{" "}
				<span className="strikethrough">data collection</span>
			</p>
			<div className="mt-10 flex justify-center gap-x-6">
				<Link href={PWA_LINK} target="_blank" aria-label="Get it for free">
					<RainbowButton className="h-14 px-8 text-lg relative z-20 ">
						Get it for free
					</RainbowButton>
				</Link>
			</div>
			<Image
				className="absolute -bottom-0 left-0 pointer-events-none invisible xl:visible"
				alt="Hero left image"
				src="/hero-left.svg"
				width={360}
				height={360}
			/>
			<Image
				className="absolute -bottom-0 -right-2 pointer-events-none invisible xl:visible"
				alt="Hero right image"
				src="/hero-right.svg"
				width={390}
				height={390}
			/>
		</div>
	);
}
