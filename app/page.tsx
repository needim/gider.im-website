import { CorporateSponsors } from "@/components/section/corporate-sponsors";
import { Features } from "@/components/section/features";
import { Header } from "@/components/section/header";
import { HeaderTop } from "@/components/section/header-top";
import { Hero } from "@/components/section/hero";
import Roadmap from "@/components/section/roadmap";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<HeaderTop />
			<Header />
			<main className="flex-1 w-full max-w-4xl mx-auto">
				<Hero />
				<CorporateSponsors />
				<Features />
				<Roadmap />
			</main>
		</div>
	);
}
