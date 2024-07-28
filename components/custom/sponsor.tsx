import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function Sponsor({ username }: { username: string }) {
	return (
		<Tooltip key={username}>
			<TooltipContent>
				<p>{username}</p>
			</TooltipContent>
			<TooltipTrigger asChild>
				<a
					target="_blank"
					href={`https://github.com/${username}`}
					className={cn(
						"transition-all -mx-1.5 sm:-mx-0.5 hover:mx-1.5 delay-200",
					)}
					rel="noreferrer"
				>
					<Avatar className="ring ring-white dark:ring-zinc-950">
						<AvatarImage
							src={`https://avatars.githubusercontent.com/${username}`}
						/>
					</Avatar>
				</a>
			</TooltipTrigger>
		</Tooltip>
	);
}
