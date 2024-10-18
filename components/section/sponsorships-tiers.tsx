import { SponsorshipsCategory } from "@/components/section/sponsorships-category";
import { IconCircleNumber1, IconRotateClockwise2 } from "@tabler/icons-react";

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

	return (
		<div className="flex sm:flex-row gap-8 px-4 sm:px-0 mt-8 flex-col-reverse">
			<SponsorshipsCategory
				tiers={tiersByMode.oneTime}
				sponsors={githubResponse.data.viewer.sponsorshipsAsMaintainer.nodes}
				icon={<IconCircleNumber1 className="inline" />}
				label="One-time"
			/>
			<SponsorshipsCategory
				tiers={tiersByMode.recurring}
				sponsors={githubResponse.data.viewer.sponsorshipsAsMaintainer.nodes}
				icon={<IconRotateClockwise2 className="inline" />}
				label="Recurring"
			/>
		</div>
	);
}
