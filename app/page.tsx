import { CorporateSponsors } from "@/components/section/corporate-sponsors";
import { Hero } from "@/components/section/hero";

export default function Home() {
	return (
		<div className="max-w-7xl mx-auto mb-8">
			<Hero />
			<CorporateSponsors />
		</div>
	);
}
