import { Sponsor } from "@/components/custom/sponsor";
import { SponsorshipsCategory } from "@/components/section/sponsorships-category";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconCircleNumber1, IconRotateClockwise2 } from "@tabler/icons-react";
import markdownit from "markdown-it";

export function SponsorshipsTiers({
	githubResponse,
}: { githubResponse: Externals.Github.APIResponse }) {
	const tiers = githubResponse.data.viewer.sponsorsListing.tiers.nodes.sort(
		(a, b) => {
			if (a.isOneTime !== b.isOneTime) {
				return a.isOneTime ? -1 : 1;
			}
			return a.monthlyPriceInDollars - b.monthlyPriceInDollars;
		},
	);

	const featuredTierId = "ST_kwDOAAQmKM4AAvQg";

	const md = markdownit();

	const tiersByMode = tiers.reduce(
		(acc, tier) => {
			if (tier.isOneTime) {
				acc.oneTime.push(tier);
			} else {
				acc.recurring.push(tier);
			}
			return acc;
		},
		{ oneTime: [] as TierElement[], recurring: [] as TierElement[] },
	);

	function getSponsorsByTier(tierId: string) {
		return githubResponse.data.viewer.sponsors.nodes.filter(
			(sponsor) => sponsor.sponsorshipForViewerAsSponsorable.tier.id === tierId,
		);
	}

	return (
		<div className="flex flex-col sm:flex-row gap-8 px-4 sm:px-0 mt-8">
			<SponsorshipsCategory
				tiers={tiersByMode.oneTime}
				sponsors={githubResponse.data.viewer.sponsors.nodes}
				icon={<IconCircleNumber1 className="inline" />}
				label="One-time"
			/>
			<SponsorshipsCategory
				tiers={tiersByMode.recurring}
				sponsors={githubResponse.data.viewer.sponsors.nodes}
				icon={<IconRotateClockwise2 className="inline" />}
				label="Recurring"
			/>
		</div>
	);
}
