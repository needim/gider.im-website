import { SponsorshipsHeader } from "@/components/section/sponsorships-header";
import { SponsorshipsMine } from "@/components/section/sponsorships-mine";
import { SponsorshipsTiers } from "@/components/section/sponsorships-tiers";
import { getGithubInfo } from "@/server/github";

export default async function Page() {
	const githubResponse = await getGithubInfo();

	return (
		<div className="py-12 sm:py-14 max-w-4xl mx-auto">
			<SponsorshipsHeader githubResponse={githubResponse} />
			<SponsorshipsTiers githubResponse={githubResponse} />
			<SponsorshipsMine githubResponse={githubResponse} />
		</div>
	);
}
