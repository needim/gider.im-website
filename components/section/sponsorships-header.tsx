import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SupportCta } from "@/components/section/support-cta";
import { ActiveGoal } from "@/components/custom/active-goal";

export function SponsorshipsHeader({
	githubResponse,
}: { githubResponse: Externals.Github.APIResponse }) {
	const activeGoal = githubResponse.data.viewer.sponsorsListing.activeGoal;
	const firstMonthlySponsor =
		githubResponse.data.viewer.sponsorshipsAsMaintainer.nodes.find(
			(sponsor) => sponsor.tier.isOneTime === false,
		);
	const monthlySponsors =
		githubResponse.data.viewer.sponsorshipsAsMaintainer.nodes.filter(
			(sponsor) => sponsor.isActive && sponsor.tier.isOneTime === false,
		);
	const monthlySponsorCount = monthlySponsors.length;

	return (
		<div className="flex flex-col px-4 sm:flex-row sm:px-0 items-center gap-6 mb-16">
			<div className="flex flex-col sm:flex-row items-center space-x-3 grow">
				<Image
					src="https://avatars.githubusercontent.com/needim"
					alt="sponsorship"
					width={120}
					height={120}
					className="rounded-full"
				/>
				<div className="text-center text-lg text-balance mt-4 sm:mt-0 sm:text-left">
					{githubResponse.data.viewer.sponsorsListing.fullDescription
						.split("\n")
						.map((line, index) => (
							<p
								key={index}
								className={cn(index !== 0 && "text-muted-foreground")}
							>
								{line}
							</p>
						))}
				</div>
			</div>
			<div>
				{activeGoal && (
					<ActiveGoal
						goal={activeGoal}
						firstMonthlySponsor={firstMonthlySponsor}
						monthlySponsorCount={monthlySponsorCount}
					/>
				)}
				<SupportCta minimal className="-mt-0.5" subClassName="rounded-t-none" />
			</div>
		</div>
	);
}
