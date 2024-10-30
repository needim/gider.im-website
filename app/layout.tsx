import { BreakpointDebug } from "@/components/custom/breakpoint-debug";
import Logo from "@/components/custom/logo";
import { Button } from "@/components/ui/button";
import {
	DropdownDescription,
	DropdownDivider,
	DropdownItem,
	DropdownLabel,
	DropdownMenu,
} from "@/components/ui/dropdown";
import { Link } from "@/components/ui/link";
import {
	Navbar,
	NavbarDivider,
	NavbarItem,
	NavbarSection,
	NavbarSpacer,
} from "@/components/ui/navbar";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
	Sidebar,
	SidebarBody,
	SidebarHeader,
	SidebarItem,
	SidebarSection,
} from "@/components/ui/sidebar";
import { Strong } from "@/components/ui/text";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
	IconArrowUpRight,
	IconBrandOpenSource,
	IconShieldLock,
} from "@tabler/icons-react";
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

import { StackedLayout } from "@/components/ui/layouts/stacked-layout";
import { PWA_LINK } from "@/lib/constants";
import "./globals.css";

const fontMono = Fira_Mono({
	weight: ["400", "500"],
	subsets: ["latin"],
	variable: "--font-mono",
});

const navItems = [
	{ label: "Roadmap", url: "/roadmap" },
	// { label: "Design Contest", url: "/design" },
	{
		label: "Sponsorship",
		url: "/sponsorship",
	},
	{
		label: (
			<>
				GitHub
				<IconArrowUpRight className="size-4 hidden sm:inline-block" />
			</>
		),
		url: "https://github.com/needim/gider.im-pwa",
		external: true,
	},
];

function WhyDropdownMenu() {
	return (
		<DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
			<DropdownItem href="/why/open-source">
				<IconBrandOpenSource data-slot="icon" />
				<DropdownLabel>Free & Open Source</DropdownLabel>
				<DropdownDescription className="max-w-52 text-balance">
					You can read, fork, and contribute to the source code on GitHub.
				</DropdownDescription>
			</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/why/privacy-focused">
				<IconShieldLock data-slot="icon" />
				<DropdownLabel>Local & Privacy First</DropdownLabel>
				<DropdownDescription className="max-w-52">
					Only you have access to your data. No ads, no data collection.
				</DropdownDescription>
			</DropdownItem>
		</DropdownMenu>
	);
}

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
				<TooltipProvider delayDuration={0} skipDelayDuration={0}>
					<StackedLayout
						navbar={
							<Navbar>
								<Button href="/" plain>
									<Logo className="size-10" />
								</Button>
								<NavbarDivider className="max-lg:hidden" />
								<NavbarSection className="max-lg:hidden">
									{/* <Dropdown>
										<DropdownButton as={NavbarItem} className="max-lg:hidden">
											<NavbarLabel>Why gider.im</NavbarLabel>
											<ChevronDownIcon />
										</DropdownButton>
										<WhyDropdownMenu />
									</Dropdown> */}
									{navItems.map(({ label, url, external }) => (
										<NavbarItem
											key={url}
											href={url}
											target={external ? "_blank" : "_self"}
										>
											{label}
										</NavbarItem>
									))}
								</NavbarSection>
								<NavbarSpacer />
								<NavbarSection>
									<Link
										href={PWA_LINK}
										target="_blank"
										aria-label="Get it for free"
									>
										<RainbowButton>Get it for free</RainbowButton>
									</Link>
								</NavbarSection>
							</Navbar>
						}
						sidebar={
							<Sidebar>
								<SidebarHeader>
									<Link href="/">
										<Button plain>
											<Logo className="size-4" />
											<Strong>gider.im</Strong>
										</Button>
									</Link>
								</SidebarHeader>
								<SidebarBody>
									<SidebarSection>
										{navItems.map(({ label, url }) => (
											<SidebarItem key={url} href={url}>
												{label}
											</SidebarItem>
										))}
									</SidebarSection>
								</SidebarBody>
							</Sidebar>
						}
					>
						{children}
					</StackedLayout>
				</TooltipProvider>
				<BreakpointDebug />
			</body>
		</html>
	);
}
