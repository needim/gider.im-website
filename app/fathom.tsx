"use client";

import { load, trackPageview } from "fathom-client";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function TrackPageView() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		load(process.env.NEXT_PUBLIC_FATHOM_ID!, {
			auto: false,
		});
	}, []);

	useEffect(() => {
		if (!pathname) return;

		trackPageview({
			url: pathname + searchParams?.toString(),
			referrer: document.referrer,
		});
	}, [pathname, searchParams]);

	return null;
}

export function FathomAnalytics() {
	return (
		<Suspense fallback={null}>
			<TrackPageView />
		</Suspense>
	);
}
