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
	avatar,
	platform,
}: { username: string; tooltip: string; avatar?: string; platform: string }) {
	return (
		<Tooltip key={username}>
			<TooltipContent>
				<p>{tooltip}</p>
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
						"transition-all -mx-1.5 sm:-mx-0.5 hover:mx-1.5 delay-200",
					)}
					rel="noreferrer"
				>
					<Avatar className="ring size-10 ring-white dark:ring-zinc-950">
						<AvatarImage
							src={
								avatar || `https://avatars.githubusercontent.com/${username}`
							}
						/>
					</Avatar>
				</a>
			</TooltipTrigger>
		</Tooltip>
	);
}
