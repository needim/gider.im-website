import { HeaderCta } from "@/components/section/header-cta";
import { MainNav } from "@/components/section/main-nav";

export function Header() {
	return (
		<header className="w-full max-w-7xl mx-auto z-40 bg-background">
			<div className="flex h-20 items-center justify-between py-6 lg:px-8 xl:px-0">
				<MainNav />
				<nav className="pr-4 lg:pr-0 block">
					<HeaderCta />
				</nav>
			</div>
		</header>
	);
}
