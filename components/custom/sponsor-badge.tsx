import { IconHeartFilled } from "@tabler/icons-react";
import Link from "next/link";

export function SponsorBadge({ count }: { count: number }) {
	return (
		<div className="flex justify-center items-center mt-0 mb-2">
			<div className="border rounded-full bg-white dark:bg-zinc-950 pr-3 font-serif pl-3 h-[40px] flex items-center justify-center text-sm leading-none z-10 whitespace-nowrap">
				<span className="relative -top-[2px]">
					Sponsored by{" "}
					<span className="font-semibold text-base">{count} people</span>
				</span>
			</div>
			<Link
				href="https://github.com/sponsors/needim"
				target="_blank"
				className="text-sm rounded-l-none border bg-zinc-800 text-white pl-9 rounded-full pr-4 h-[40px] -ml-8 relative overflow-hidden z-0 flex items-center transition-all hover:bg-zinc-700"
			>
				<IconHeartFilled className="mr-1.5 size-5" /> Support{" "}
				<span className="hidden lg:inline lg:ml-1">this project</span>
				<div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
					<div className="relative h-full w-8 bg-white/30" />
				</div>
			</Link>
		</div>
	);
}
