import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { IconThumbUpFilled } from "@tabler/icons-react";
import Link from "next/link";

export function ContestVoteCta() {
	return (
		<div className="relative isolate text-center">
			<Link
				target="_blank"
				href={"https://x.com/needim/status/1820345338764394754"}
				className="z-10 items-center justify-center inline-flex"
			>
				<AnimatedGradientText>
					<IconThumbUpFilled className="text-sky-600 dark:text-sky-200 mr-2" />{" "}
					<span
						className={cn(
							"inline animate-gradient bg-gradient-to-r from-sky-900 dark:from-sky-200 via-sky-600 dark:via-white to-sky-900 dark:to-sky-200 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xl font-semibold py-1",
						)}
					>
						Voted on X platform
					</span>
				</AnimatedGradientText>
			</Link>
		</div>
	);
}
