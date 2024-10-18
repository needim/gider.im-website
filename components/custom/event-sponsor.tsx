import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function EventSponsor({
	username,
	tooltip,
	platform,
	className,
}: {
	username: string;
	tooltip: string;
	avatar?: string;
	platform: string;
	className?: string;
}) {
	return (
		<Tooltip key={username}>
			<TooltipContent className="text-center text-zinc-50">
				<p>{tooltip}</p>
				<p className="text-xs text-muted-foreground">@{username}</p>
			</TooltipContent>
			<TooltipTrigger asChild>
				<a
					target="_blank"
					href={
						platform === "github"
							? `https://github.com/${username}`
							: `https://twitter.com/${username}`
					}
					className={cn(
						"transition-all relative -mx-0.5 hover:scale-125 hover:z-10",
					)}
					rel="noreferrer"
				>
					<Avatar
						className={cn(
							"ring size-7 ring-white dark:ring-zinc-950",
							className,
						)}
					>
						<AvatarImage
							src={
								platform === "github"
									? `https://avatars.githubusercontent.com/${username}`
									: `https://unavatar.io/x/${username}`
							}
						/>
					</Avatar>
				</a>
			</TooltipTrigger>
		</Tooltip>
	);
}
