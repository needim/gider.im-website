import { EventSponsor } from "@/components/custom/event-sponsor";
import { Sponsor } from "@/components/custom/sponsor";
import { SponsorBadge } from "@/components/custom/sponsor-badge";
import { YoutubeSponsor } from "@/components/custom/youtube-sponsor";
import { TooltipProvider } from "@/components/ui/tooltip";

const MONTHLY_SPONSORS = [
	{
		username: "aliosmandev",
	},
	{
		username: "giraybatiturk",
	},
	{
		username: "adiguzelburak",
	},
	{
		username: "eser",
	},
	{
		username: "evrenvural",
	},
	{
		username: "calganaygun",
	},
	{
		username: "mehmetaltugakgul",
	},
	{
		username: "meminuygur",
	},
	{
		username: "aardabayram",
	},
	{
		username: "aykutkardas",
	},
	{
		username: "kanadikirik",
	},
	{
		username: "thisisroi",
	},
	{
		username: "kacmazm",
	},
	{
		username: "MATTAM540",
	},
	{
		username: "komunite",
	},
	{
		username: "mahmutyildizx",
	},
	{
		username: "kemalersin",
	},
	{
		username: "islamsanliturk",
	},
	{
		username: "isikmuhamm",
	},
	{
		username: "uygar",
	},
	{
		username: "apo-bozdag",
	},
	{
		username: "serhatkildaci",
	},
	{
		username: "alperiskender",
	},
	{
		username: "alimuratumutlu",
	},
	{
		username: "alpererdogan8",
	},
];

const EVENT_SPONSORS = [
	{
		username: "9ssi7",
		tooltip: "Sami Salih İbrahimbaş",
		platform: "github",
	},
	{
		username: "eserozvataf",
		tooltip: "Eser Özvataf",
		platform: "twitter",
		avatar:
			"https://pbs.twimg.com/profile_images/1812738529056673792/l8CGDu52_400x400.jpg",
	},
	{
		username: "oguzyagizkara",
		tooltip: "Oğuz Yağız Kara",
		platform: "twitter",
		avatar:
			"https://pbs.twimg.com/profile_images/1799141903272710144/XhujOrEi_400x400.jpg",
	},
	{
		username: "batuhankrskl",
		tooltip: "Batuhan Karasakal",
		platform: "github",
	},
	{
		username: "ugorur",
		tooltip: "Umurcan Görür",
		platform: "twitter",
		avatar:
			"https://pbs.twimg.com/profile_images/1741572315874226176/QaNQfZpS_400x400.jpg",
	},
];
const firstRow = MONTHLY_SPONSORS.slice(0, MONTHLY_SPONSORS.length / 2);
const secondRow = MONTHLY_SPONSORS.slice(MONTHLY_SPONSORS.length / 2);

export function Supporters() {
	return (
		<TooltipProvider delayDuration={200} skipDelayDuration={0}>
			<YoutubeSponsor />
			<SponsorBadge count={MONTHLY_SPONSORS.length + EVENT_SPONSORS.length} />

			<div className="flex justify-center -mb-0.5 max-w-sm mx-auto flex-wrap">
				{firstRow.map((sponsor) => (
					<Sponsor key={sponsor.username} username={sponsor.username} />
				))}
			</div>

			<div className="flex justify-center mb-4 max-w-sm mx-auto flex-wrap">
				{secondRow.map((sponsor) => (
					<Sponsor key={sponsor.username} username={sponsor.username} />
				))}
			</div>

			<h2 className="text-lg font-semibold text-center mb-2">Event Sponsors</h2>
			<div className="flex justify-center mb-4 max-w-sm mx-auto flex-wrap">
				{EVENT_SPONSORS.map((sponsor) => (
					<EventSponsor key={sponsor.username} {...sponsor} />
				))}
			</div>
		</TooltipProvider>
	);
}
