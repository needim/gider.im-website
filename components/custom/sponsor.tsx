import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function Sponsor({ login, name }: SponsorEntity) {
	return (
		<Tooltip key={login}>
			<TooltipContent className="text-center">
				<p>{name}</p>
				<p className="text-xs text-muted-foreground">@{login}</p>
			</TooltipContent>
			<TooltipTrigger asChild>
				<a
					target="_blank"
					href={`https://github.com/${login}`}
					className={cn(
						"transition-all -mx-1.5 sm:-mx-0.5 hover:mx-1.5 delay-200",
					)}
					rel="noreferrer"
				>
					<Avatar className="ring size-8 ring-white dark:ring-zinc-950">
						<AvatarImage
							src={`https://avatars.githubusercontent.com/${login}`}
						/>
					</Avatar>
				</a>
			</TooltipTrigger>
		</Tooltip>
	);
}
