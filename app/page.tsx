import { CorporateSponsors } from "@/components/section/corporate-sponsors";
import { Features } from "@/components/section/features";
import { Hero } from "@/components/section/hero";

export default function Home() {
	return (
		<div className="max-w-4xl mx-auto mb-28">
			<Hero />
			<CorporateSponsors />
			<Features />
		</div>
	);
}
