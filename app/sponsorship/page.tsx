import { SponsorshipsHeader } from "@/components/section/sponsorships-header";
import { SponsorshipsMine } from "@/components/section/sponsorships-mine";
import { SponsorshipsTiers } from "@/components/section/sponsorships-tiers";
import { getGithubInfo } from "@/server/github";

export default async function Page() {
	const githubResponse = await getGithubInfo();

	return (
		<>
			<SponsorshipsHeader githubResponse={githubResponse} />
			<SponsorshipsTiers githubResponse={githubResponse} />
			<SponsorshipsMine githubResponse={githubResponse} />
		</>
	);
}
