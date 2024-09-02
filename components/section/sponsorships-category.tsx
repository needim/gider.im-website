import { Sponsor } from "@/components/custom/sponsor";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import markdownit from "markdown-it";

export function SponsorshipsCategory({
	tiers,
	sponsors,
	icon,
	label,
}: {
	tiers: TierElement[];
	sponsors: SponsorshipsAsMaintainerNode[];
	icon: React.ReactNode;
	label: string;
}) {
	const md = markdownit();
	function getSponsorsByTier(tierId: string) {
		return sponsors.filter((sponsor) => sponsor.tier.id === tierId);
	}
	const featuredTierId = "ST_kwDOAAQmKM4AAvQg";

	return (
		<div className="w-full sm:w-1/2">
			<div className="relative mb-4">
				<div aria-hidden="true" className="absolute inset-0 flex items-center">
					<div className="w-full border-t border-dashed border-zinc-200 dark:border-zinc-700" />
				</div>
				<div className="relative flex justify-start">
					<span className="bg-white dark:bg-zinc-950 text-sky-600 dark:text-sky-300 pr-2 text-lg font-semibold">
						{icon} {label}
					</span>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 tiers">
				{tiers.map((tier) => {
					const tierSponsors = getSponsorsByTier(tier.id);
					return (
						<div
							key={tier.id}
							className="tier rounded-lg bg-white dark:bg-zinc-950"
						>
							<h2 className="text-xl font-medium flex items-center">
								{tier.name}

								{tier.id === featuredTierId && (
									<Tooltip>
										<TooltipContent className="text-center">
											<p>Featured tier</p>
										</TooltipContent>
										<TooltipTrigger asChild>
											<span className="relative flex h-2 w-2 ml-2">
												<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
												<span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
											</span>
										</TooltipTrigger>
									</Tooltip>
								)}

								{tierSponsors.length > 0 && (
									<span className="text-muted-foreground font-normal text-xs ml-auto">
										{tierSponsors.length} sponsors
									</span>
								)}
							</h2>

							<div className="flex justify-start my-2 flex-wrap">
								{tierSponsors.map((sponsor) => (
									<Sponsor
										key={sponsor.sponsorEntity.login}
										{...sponsor.sponsorEntity}
									/>
								))}
							</div>

							<div
								className="text-muted-foreground"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
								dangerouslySetInnerHTML={{
									__html: md.render(tier.description!),
								}}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
