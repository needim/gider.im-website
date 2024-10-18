"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Sponsor({ login, name }: SponsorEntity) {
	return (
		<Tooltip key={login}>
			<TooltipContent className="text-center text-zinc-50">
				<p>{name}</p>
				<p className="text-xs text-muted-foreground">@{login}</p>
			</TooltipContent>
			<TooltipTrigger asChild>
				<motion.a
					// initial={{ opacity: 0, y: 15 }}
					// animate={{ opacity: 1, y: 0 }}
					target="_blank"
					href={`https://github.com/${login}`}
					className={cn(
						"transition-all relative -mx-0.5 hover:scale-125 hover:z-10",
					)}
					rel="noreferrer"
				>
					<Avatar className="ring size-7 ring-zinc-50 dark:ring-zinc-950">
						<AvatarImage
							src={`https://avatars.githubusercontent.com/${login}`}
						/>
					</Avatar>
				</motion.a>
			</TooltipTrigger>
		</Tooltip>
	);
}
