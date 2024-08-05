import { ContestAttendees } from "@/components/section/contest-attendees";
import { ContestFinalists } from "@/components/section/contest-finalists";
import { ContestVoteCta } from "@/components/section/contest-vote-cta";
import { Supporters } from "@/components/section/supporters";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
	return (
		<>
			<ContestFinalists />
			<ContestVoteCta />
			<div className="mt-12">
				<Supporters />
			</div>
			<ContestAttendees />
		</>
	);
}
