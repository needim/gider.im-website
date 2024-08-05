import type { CSSProperties, FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
	children: ReactNode;
	className?: string;
	shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
	children,
	className,
	shimmerWidth = 100,
}) => {
	return (
		<p
			style={
				{
					"--shimmer-width": `${shimmerWidth}px`,
				} as CSSProperties
			}
			className={cn(
				"mx-auto max-w-md text-foreground",

				// Shimmer effect
				"animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

				// Shimmer gradient
				"bg-gradient-to-r from-white via-yellow-400 via-50% to-white  dark:via-white/80",

				className,
			)}
		>
			{children}
		</p>
	);
};

export default AnimatedShinyText;
