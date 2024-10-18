import AnimatedGradientSponsorText from "@/components/custom/animated-gradient-sponsor-text";
import { SPONSOR_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { IconChevronRight, IconHeartFilled } from "@tabler/icons-react";
import Link from "next/link";

export function SupportCta({
	className,
	subClassName,
	minimal = false,
	label = "Sponsor this project",
}: {
	className?: string;
	subClassName?: string;
	label?: string;
	minimal?: boolean;
}) {
	return (
		<div className={cn("relative isolate text-center group", className)}>
			<Link
				target="_blank"
				href={SPONSOR_LINK}
				className="z-10 items-center justify-center inline-flex"
			>
				<AnimatedGradientSponsorText className={subClassName}>
					<IconHeartFilled className="text-red-600 dark:text-red-400 mr-2" />{" "}
					<span
						className={cn(
							"inline animate-gradient bg-gradient-to-r from-red-900 dark:from-red-200 via-red-600 dark:via-white to-red-900 dark:to-red-200 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xl font-semibold py-1",
							minimal && "text-base",
						)}
					>
						{label}
					</span>
					<IconChevronRight className="ml-1 text-red-600 dark:text-red-100 group-hover:ml-2 transition-all" />
				</AnimatedGradientSponsorText>
			</Link>
		</div>
	);
}
