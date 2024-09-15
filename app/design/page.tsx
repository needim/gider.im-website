import { ContestAttendees } from "@/components/section/contest-attendees";
import { ContestFinalists } from "@/components/section/contest-finalists";
import { ContestVoteCta } from "@/components/section/contest-vote-cta";
import { SupportCta } from "@/components/section/support-cta";

export default function Home() {
	return (
		<>
			<ContestFinalists />
			<div className="flex items-center justify-center gap-3 flex-col sm:flex-row">
				<ContestVoteCta />
				<SupportCta />
			</div>
			<ContestAttendees />

			<p className="text-muted-foreground text-sm text-center mb-16">
				<a
					href="https://www.flaticon.com/authors/freepik"
					title="Freepik Icons"
				>
					Icons created by Freepik - Flaticon
				</a>
			</p>
		</>
	);
}
