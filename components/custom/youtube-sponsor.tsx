import Link from "next/link";

export function YoutubeSponsor() {
	return (
		<div className="flex justify-center items-center mb-0.5 mt-4">
			<div className="border rounded-full bg-white dark:bg-zinc-950 pr-3 font-serif tracking-wide pl-3 h-[40px] flex items-center justify-center text-sm leading-none z-10 whitespace-nowrap">
				<span className="relative -top-[1px]">YouTube Sponsor</span>
			</div>
			<Link
				href="https://www.youtube.com/@eserlive"
				target="_blank"
				className="text-sm rounded-l-none border bg-zinc-800 text-white pl-9 rounded-full pr-4 h-[40px] -ml-8 relative overflow-hidden z-0 flex items-center transition-all hover:bg-zinc-700"
			>
				<svg
					width="69"
					height="49"
					viewBox="0 0 69 49"
					fill="none"
					className="mr-2 ml-0.5 size-5"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M67.2093 7.55198C66.4199 4.57963 64.0942 2.23833 61.1405 1.44386C55.7875 0 34.3219 0 34.3219 0C34.3219 0 12.8563 0 7.50284 1.44386C4.5496 2.23833 2.22351 4.57963 1.43411 7.55198C0 12.9401 0 24.1813 0 24.1813C0 24.1813 0 35.4229 1.43411 40.811C2.22351 43.7834 4.5496 46.1243 7.50284 46.9192C12.8563 48.3626 34.3219 48.3626 34.3219 48.3626C34.3219 48.3626 55.7875 48.3626 61.1405 46.9192C64.0942 46.1243 66.4199 43.7834 67.2093 40.811C68.6438 35.4229 68.6438 24.1813 68.6438 24.1813C68.6438 24.1813 68.6438 12.9401 67.2093 7.55198Z"
						fill="#ED1F24"
					/>
					<path
						d="M27.2979 34.3873L45.2388 24.1812L27.2979 13.9747V34.3873Z"
						fill="white"
					/>
				</svg>
				<span className="relative -top-[1px]">eser.live</span>
				<div className="animate-shine-infinite delay-200 absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
					<div className="relative h-full w-8 bg-white/30" />
				</div>
			</Link>
		</div>
	);
}
