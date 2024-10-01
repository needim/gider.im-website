import { FathomAnalytics } from "@/app/fathom";
import { BreakpointDebug } from "@/components/custom/breakpoint-debug";
import { Header } from "@/components/section/header";
import { HeaderTop } from "@/components/section/header-top";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/theme";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Lexend, Playfair_Display } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
	subsets: ["latin"],
	variable: "--font-lexend",
});
const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair-display",
});
const ibm = IBM_Plex_Mono({
	weight: ["400", "600"],
	subsets: ["latin"],
	variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
	title: "gider.im",
	description:
		"Free, privacy first, local first, no tracking, no ads, no data collection.",
	openGraph: {
		title: "gider.im",
		description:
			"Free, privacy first, local first, no tracking, no ads, no data collection.",
		url: "https://gider.im",
		siteName: "gider.im",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://gider.im/og.png",
				width: 1200,
				height: 630,
				alt: "gider.im",
			},
		],
	},
	twitter: {
		title: "gider.im",
		card: "summary_large_image",
		images: [
			{
				url: "https://gider.im/og.png",
				width: 1200,
				height: 630,
				alt: "gider.im",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: [
		{
			rel: "icon",
			type: "image/svg+xml",
			url: "/favicon.svg",
		},
		{
			rel: "icon",
			type: "image/png",
			url: "/favicon.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/apple-touch-icon-180x180.png",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${lexend.variable} ${ibm.variable} ${playfair.variable}`}
		>
			<body>
				<FathomAnalytics />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					storageKey="giderim-website-theme"
				>
					<TooltipProvider delayDuration={200} skipDelayDuration={0}>
						<div className="flex min-h-screen flex-col">
							<Header />
							<main className="flex-1 w-full max-w-7xl mx-auto">
								{children}
							</main>
							<HeaderTop />
						</div>
					</TooltipProvider>
					<BreakpointDebug />
				</ThemeProvider>
			</body>
		</html>
	);
}
