import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import {
	IconAdOff,
	IconCloudLock,
	IconCookieOff,
	IconEyeOff,
	IconFreeRights,
	IconKey,
	IconLockSquare,
} from "@tabler/icons-react";
import type { ReactNode } from "react";

export const features = [
	{
		name: "Free",
		body: "This app doesn't cost me much. So I don't charge you.",
		icon: <IconFreeRights size={20} />,
	},
	{
		name: "Privacy first",
		body: "I care about your privacy. You should too.",
		icon: <IconLockSquare size={20} />,
	},
	{
		name: "Encrypted",
		body: "All your data is encrypted. It's safe. It's secure.",
		icon: <IconKey size={20} />,
	},
	{
		name: "Local first",
		body: "Your data is stored locally. It's fast.",
		icon: <IconCloudLock size={20} />,
	},
	{
		name: "No tracking",
		body: "I don't track you. It's respectful.",
		icon: <IconCookieOff size={20} />,
	},
	{
		name: "No ads",
		body: "This app is ad-free. It's clean and beautiful.",
		icon: <IconAdOff size={20} />,
	},
	{
		name: "No data collection",
		body: "I don't collect your data. It's personal.",
		icon: <IconEyeOff size={20} />,
	},
];

const firstRow = features.slice(0, features.length / 2);
const secondRow = features.slice(features.length / 2);

const FeatureCard = ({
	icon,
	name,
	body,
}: {
	icon: ReactNode;
	name: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				{icon}
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function Features() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((review) => (
					<FeatureCard key={review.name} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((review) => (
					<FeatureCard key={review.name} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
		</div>
	);
}
