import { HeaderCta } from "@/components/section/header-cta";
import { MainNav } from "@/components/section/main-nav";

export function Header() {
	return (
		<header className="w-full max-w-4xl mx-auto z-40 bg-background">
			<div className="flex h-20 items-center justify-between py-6">
				<MainNav />
				<nav className="pr-4 lg:pr-0">
					<HeaderCta />
				</nav>
			</div>
		</header>
	);
}
