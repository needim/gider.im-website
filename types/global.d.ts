declare namespace Externals {
	namespace Github {
		interface APIResponse {
			data: Data;
		}
	}
}

interface Data {
	viewer: Viewer;
}

interface Viewer {
	login: string;
	sponsors: Sponsors;
	sponsoring: Sponsoring;
	sponsorsListing: SponsorsListing;
}

interface Sponsoring {
	nodes: SponsoringNode[];
}

interface SponsoringNode {
	login: string;
	name: string;
	bio: string;
	avatarUrl: string;
	twitterUsername: string;
	sponsorshipForViewerAsSponsor: SponsorshipForViewerAsSponsor;
}

interface SponsorshipForViewerAsSponsor {
	isOneTimePayment: boolean;
	isActive: boolean;
	createdAt: string;
	tier: TierElement;
}

interface TierElement {
	id: string;
	isCustomAmount?: boolean;
	monthlyPriceInDollars: number;
	isOneTime: boolean;
	name: string;
	description?: string;
}

interface Sponsors {
	totalCount: number;
	nodes: SponsorsNode[];
}

interface SponsorsNode {
	__typename: string;
	login: string;
	name: null | string;
	bio?: null | string;
	avatarUrl: string;
	twitterUsername: null | string;
	sponsorshipForViewerAsSponsorable: SponsorshipForViewerAsSponsorable;
	description?: string;
}

interface SponsorshipForViewerAsSponsorable {
	isActive: boolean;
	createdAt: string;
	tier: TierElement;
}

interface SponsorsListing {
	url: string;
	fullDescription: string;
	activeGoal: ActiveGoal;
	tiers: Tiers;
}

interface ActiveGoal {
	kind: string;
	description: string;
	percentComplete: number;
	targetValue: number;
	title: string;
}

interface Tiers {
	nodes: TierElement[];
}
