import Logo from "@/components/custom/logo";
import { StoreButtons } from "@/components/custom/store-buttons";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
			<div className="max-w-2xl mx-auto text-center space-y-8">
				{/* Logo */}
				<div className="flex justify-center mb-6">
					<Logo className="size-24" />
				</div>

				{/* Deprecation Badge */}
				<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium border border-amber-200">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
						<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
					</span>
					PWA Deprecated
				</div>

				{/* Main Message */}
				<h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
					gider.im is now{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
						Wageso
					</span>
				</h1>

				<p className="text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed">
					I've rebuilt gider.im from the ground up as{" "}
					<strong className="text-zinc-900">Wageso</strong> — native{" "}
					<strong className="text-zinc-900">iOS</strong> and{" "}
					<strong className="text-zinc-900">Android</strong> apps for a better,
					faster, and more reliable experience. New{" "}
					<strong className="text-zinc-900">web app</strong> will be available
					soon.
				</p>

				{/* Incompatibility Notice */}
				<div className="bg-zinc-100 border border-zinc-200 rounded-xl p-6 text-left space-y-3">
					<h2 className="font-semibold text-zinc-900 flex items-center gap-2">
						<svg
							className="size-5 text-zinc-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Important: Data Migration
					</h2>
					<p className="text-sm text-zinc-600 leading-relaxed">
						The new apps use a completely different data architecture. I've
						switched from{" "}
						<span className="font-mono text-xs bg-zinc-200 px-1.5 py-0.5 rounded">
							evolu
						</span>{" "}
						to{" "}
						<span className="font-mono text-xs bg-zinc-200 px-1.5 py-0.5 rounded whitespace-nowrap">
							jazz-tools
						</span>{" "}
						for better sync and collaboration features. Unfortunately, this
						means{" "}
						<strong className="text-zinc-900">
							data from the old web app cannot be migrated
						</strong>{" "}
						to the new native apps.
					</p>
				</div>

				{/* App Store Links */}
				<StoreButtons className="justify-center pt-4" />

				{/* Footer note */}
				<p className="text-sm text-zinc-500 pt-8 leading-relaxed">
					The old web app will remain accessible for future use, but I don't
					provide any support for that and I don't have any plans for improving
					it. So please upgrade to the new native apps.{" "}
					<Link
						href="https://app.gider.im"
						target="_blank"
						className="inline-flex items-center gap-1 font-medium text-zinc-700 hover:text-zinc-900 underline underline-offset-2 transition-colors"
					>
						Access old app →
					</Link>
				</p>
			</div>
		</div>
	);
}
