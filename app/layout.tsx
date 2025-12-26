import { BreakpointDebug } from "@/components/custom/breakpoint-debug";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Fira_Mono } from "next/font/google";
import localFont from "next/font/local";

const font = localFont({
	src: [
		{
			path: "../fonts/GTWalsheimPro-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/GTWalsheimPro-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../fonts/GTWalsheimPro-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-display",
});

import "./globals.css";

const fontMono = Fira_Mono({
	weight: ["400", "500"],
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "gider.im is now Wageso - Available on iOS & Android",
	description:
		"gider.im has evolved into Wageso! Download the new native iOS and Android apps for a better expense tracking experience.",
	openGraph: {
		title: "gider.im is now Wageso - Available on iOS & Android",
		description:
			"gider.im has evolved into Wageso! Download the new native iOS and Android apps for a better expense tracking experience.",
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
		title: "gider.im is now Wageso - Available on iOS & Android",
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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${font.variable} ${fontMono.variable}`}>
			<head>
				<link
					rel="icon"
					type="image/png"
					href="/favicon-48x48.png"
					sizes="48x48"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<meta name="apple-mobile-web-app-title" content="gider.im" />
				<link rel="manifest" href="/site.webmanifest" />
				<PlausibleProvider
					selfHosted
					customDomain="https://stats.ned.im"
					domain="gider.im"
				/>
			</head>
			<body>
				<main className="min-h-screen">{children}</main>
				<BreakpointDebug />
			</body>
		</html>
	);
}
