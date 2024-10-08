import { ThemeToggle } from "@/components/custom/theme-toggle";
import Link from "next/link";

export function HeaderTop() {
	return (
		<div className="bg-zinc-100 dark:bg-zinc-900">
			<div className="w-full max-w-7xl mx-auto py-2 lg:py-3.5 px-4 lg:px-8 xl:px-0 flex items-center">
				<span className="text-sm text-foreground/80">
					Developed by{" "}
					<Link target="_blank" href="https://ned.im">
						Nedim Arabacı.
					</Link>
					<span className="font-serif sm:ml-2 sm:inline block tracking-wide">
						I care about your privacy.
					</span>
				</span>

				<ThemeToggle hideIndicator className="ml-auto" />
			</div>
		</div>
	);
}
