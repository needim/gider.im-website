import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface StoreButtonsProps {
	whiteBorder?: boolean;
	className?: string;
}

const IOS_URL = "https://apps.apple.com/us/app/wageso/id6747617318";
const ANDROID_URL =
	"https://play.google.com/store/apps/details?id=com.needim.wageso";

export const StoreButtons = ({ whiteBorder, className }: StoreButtonsProps) => {
	return (
		<div className={cn("flex flex-row flex-wrap gap-4", className)}>
			<Link href={IOS_URL} target="_blank">
				<Image
					src="/appstore.svg"
					width={168}
					height={56}
					alt="Download on the App Store"
					className={cn(whiteBorder ? "rounded-md border-2 border-white" : "")}
				/>
			</Link>

			<Link href={ANDROID_URL} target="_blank">
				<Image
					src="/googleplay.svg"
					width={168}
					height={56}
					alt="Get it on Google Play"
					className={cn(whiteBorder ? "rounded-md border-2 border-white" : "")}
				/>
			</Link>
		</div>
	);
};
