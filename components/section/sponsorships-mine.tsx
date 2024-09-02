import Image from "next/image";
import Link from "next/link";

export function SponsorshipsMine({
	githubResponse,
}: { githubResponse: Externals.Github.APIResponse }) {
	const mySponsorships = githubResponse.data.viewer.sponsoring.nodes.sort(
		(a, b) =>
			new Date(a.sponsorshipForViewerAsSponsor.createdAt).getTime() >
			new Date(b.sponsorshipForViewerAsSponsor.createdAt).getTime()
				? -1
				: 1,
	);

	return (
		<div className="w-full mt-8 sm:mx-0 px-4 sm:px-0">
			<h1 className="text-2xl font-semibold mt-8 mb-4">My Sponsorships</h1>

			<div className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-3 max-w-full">
				{mySponsorships.map((sponsorship) => {
					return (
						<Link
							href={`https://github.com/${sponsorship.login}`}
							target="_blank"
							key={sponsorship.login}
							className="py-5"
						>
							<div className="flex flex-row min-w-0 gap-x-4">
								<Image
									alt=""
									width={48}
									height={48}
									src={`https://avatars.githubusercontent.com/${sponsorship.login}`}
									className="h-12 w-12 flex-none rounded-full"
								/>
								<div className="flex flex-col max-w-sm">
									<p className="text-sm font-semibold">{sponsorship.name}</p>
									<p className="mt-1 text-xs text-muted-foreground">
										@{sponsorship.login}{" "}
										<span className="font-medium text-xs mt-1 grow-0">
											• {sponsorship.sponsorshipForViewerAsSponsor.tier.name}
										</span>
									</p>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
