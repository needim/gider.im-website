import { EventSponsor } from "@/components/custom/event-sponsor";
import { Sponsor } from "@/components/custom/sponsor";
import { Strong } from "@/components/ui/text";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { getGithubInfo } from "@/server/github";
import { IconArrowRight, IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

const EXTERNAL_SPONSORS = [
	{
		username: "oguzyagizkara",
		tooltip: "Oğuz Yağız Kara",
		platform: "twitter",
		includeInTotal: true,
	},
];

export async function Supporters() {
	const githubResponse = await getGithubInfo();
	const allSupporters =
		githubResponse.data.viewer.sponsorshipsAsMaintainer.nodes.sort((a, b) =>
			new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()
				? 1
				: -1,
		);

	return (
		<>
			<h2 className="text-md text-center mb-3 text-muted-foreground">
				<Strong className="underline-doodle">
					{githubResponse.data.viewer.sponsorshipsAsMaintainer.totalCount +
						EXTERNAL_SPONSORS.filter((s) => s.includeInTotal).length}{" "}
					people
				</Strong>{" "}
				sponsoring gider.im
			</h2>

			<div className="flex justify-center items-center flex-wrap">
				<Tooltip>
					<TooltipContent className="text-center text-zinc-50">
						<Strong className="!text-red-400">Special Sponsor</Strong>
						<p>eser.live</p>
						<p className="text-xs text-muted-foreground">
							Eser Özvataf's <br />
							YouTube channel
						</p>
					</TooltipContent>
					<TooltipTrigger asChild>
						<a
							target="_blank"
							href="https://www.youtube.com/@eserlive"
							className={cn(
								"transition-all relative -mx-0.5 hover:scale-125 hover:z-10",
							)}
							rel="noreferrer"
						>
							<IconBrandYoutubeFilled className="size-9 text-red-500" />
						</a>
					</TooltipTrigger>
				</Tooltip>
				{EXTERNAL_SPONSORS.map((sponsor) => (
					<EventSponsor key={sponsor.username} {...sponsor} />
				))}
				{allSupporters.map((sponsor) => (
					<Sponsor
						key={sponsor.sponsorEntity.login}
						{...sponsor.sponsorEntity}
					/>
				))}
			</div>

			<div className="flex justify-center items-center flex-wrap mt-4">
				<Link href="/sponsorship" className="font-medium text-blue-500">
					<span className="inline-flex items-center gap-1">
						Become a sponsor{" "}
						<IconArrowRight className="size-3 inline-block stroke-[3px]" />
					</span>
				</Link>
			</div>
		</>
	);
}
