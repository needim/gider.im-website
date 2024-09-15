import { SPONSOR_LINK } from "@/constants";
import Image from "next/image";

export function CorporateSponsors() {
	return (
		<div>
			<div className="rounded-lg rounded-b-none overflow-hidden">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-4 lg:grid-cols-8 gap-0.5 overflow-hidden">
						<a
							href="https://birdefter.com?utm_source=giderim"
							className="bg-zinc-100/75 dark:bg-zinc-900 p-4 px-6 flex items-center col-span-1"
						>
							<svg
								width="3.78em"
								height="2.7em"
								viewBox="0 0 1665 440"
								fill="none"
								key="logo"
								className="max-h-full w-full object-contain filter grayscale transition-all dark:invert duration-300"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width={440} height={440} rx={96} fill="#1E293B" />
								<path
									d="M226 100c0-13.255 10.745-24 24-24h56c13.255 0 24 10.745 24 24v104H226V100z"
									fill="url(#prefix__paint0_linear_1_2)"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M330 116v208c0 22.091-17.909 40-40 40H150c-22.091 0-40-17.909-40-40v-80c0-22.091 17.909-40 40-40h60c32.5 0 86.069-6.245 120-88z"
									fill="#fff"
								/>
								<path
									d="M631.726 98.175c28.77 0 54.009 5.598 75.718 16.792 21.969 11.194 38.839 27.205 50.609 48.031 12.031 20.566 18.046 44.517 18.046 71.852 0 27.334-6.015 51.285-18.046 71.851-11.77 20.306-28.64 36.056-50.609 47.25-21.709 11.195-46.948 16.792-75.718 16.792H536V98.176h95.726zm-1.962 226.099c28.77 0 51.002-7.81 66.695-23.43 15.692-15.62 23.539-37.618 23.539-65.994 0-28.377-7.847-50.505-23.539-66.385-15.693-16.141-37.925-24.211-66.695-24.211h-38.839v180.02h38.839zM1007.57 254.889c0 7.81-.52 14.839-1.57 21.087H847.113c1.308 15.62 6.801 27.855 16.478 36.707 9.677 8.851 21.577 13.277 35.701 13.277 20.4 0 34.916-8.722 43.547-26.164h59.241c-6.278 20.827-18.309 38.009-36.094 51.546-17.785 13.277-39.624 19.915-65.517 19.915-20.924 0-39.755-4.556-56.494-13.667-16.478-9.372-29.424-22.519-38.84-39.44-9.154-16.922-13.731-36.447-13.731-58.575 0-22.389 4.577-42.044 13.731-58.965 9.154-16.922 21.97-29.938 38.447-39.05 16.478-9.112 35.44-13.667 56.887-13.667 20.662 0 39.101 4.425 55.317 13.277 16.477 8.851 29.162 21.477 38.055 37.878 9.149 16.14 13.729 34.754 13.729 55.841zm-56.884-15.62c-.262-14.058-5.362-25.252-15.301-33.583-9.939-8.591-22.1-12.886-36.485-12.886-13.601 0-25.109 4.165-34.525 12.496-9.154 8.07-14.777 19.394-16.869 33.973h103.18zM1139.52 200.314h-38.05v171.429h-55.71V200.314h-24.72v-44.907h24.72v-10.934c0-26.554 7.58-46.079 22.75-58.575 15.17-12.495 38.06-18.353 68.66-17.572v46.079c-13.34-.26-22.63 1.952-27.86 6.638s-7.84 13.147-7.84 25.383v8.981h38.05v44.907zM1239.06 199.314v104.654c0 7.289 1.7 12.626 5.1 16.01 3.66 3.124 9.68 4.686 18.05 4.686h25.5v46.079h-34.52c-46.3 0-69.44-22.389-69.44-67.166V199.314h-25.9v-44.907h25.9v-53.498h55.31v53.498h48.65v44.907h-48.65zM1517.57 254.889c0 7.81-.52 14.839-1.57 21.087h-158.89c1.31 15.62 6.81 27.855 16.48 36.707 9.68 8.851 21.58 13.277 35.7 13.277 20.4 0 34.92-8.722 43.55-26.164h59.24c-6.28 20.827-18.31 38.009-36.09 51.546-17.79 13.277-39.63 19.915-65.52 19.915-20.92 0-39.75-4.556-56.49-13.667-16.48-9.372-29.43-22.519-38.84-39.44-9.16-16.922-13.73-36.447-13.73-58.575 0-22.389 4.57-42.044 13.73-58.965 9.15-16.922 21.97-29.938 38.44-39.05 16.48-9.112 35.44-13.667 56.89-13.667 20.66 0 39.1 4.425 55.32 13.277 16.47 8.851 29.16 21.477 38.05 37.878 9.16 16.14 13.73 34.754 13.73 55.841zm-56.88-15.62c-.26-14.058-5.36-25.252-15.3-33.583-9.94-8.591-22.1-12.886-36.49-12.886-13.6 0-25.11 4.165-34.52 12.496-9.16 8.07-14.78 19.394-16.87 33.973h103.18zM1598.31 187.99c7.06-11.455 16.21-20.436 27.46-26.944 11.51-6.509 24.58-9.763 39.23-9.763v57.403h-14.52c-17.26 0-30.34 4.035-39.23 12.106-8.63 8.07-12.94 22.128-12.94 42.173v107.778h-54.93V154.407h54.93v33.583z"
									fill="#1E293B"
								/>
								<defs>
									<linearGradient
										id="prefix__paint0_linear_1_2"
										x1={127}
										y1={1}
										x2={359}
										y2={233}
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#fff" stopOpacity={0.8} />
										<stop offset={0} stopColor="#fff" />
										<stop offset={0.867} stopColor="#fff" stopOpacity={0} />
									</linearGradient>
								</defs>
							</svg>
						</a>

						<a
							href={SPONSOR_LINK}
							className="bg-zinc-100/75 group dark:bg-zinc-900 flex p-1 items-center col-span-1"
						>
							<Image
								className="w-full rounded-md object-contain filter grayscale hover:grayscale-0 dark:hover:invert-0 transition-all dark:invert duration-300 ease-in-out"
								src="/lemon-platinum.png"
								alt="platinum"
								width={400}
								height={300}
							/>
						</a>

						<a
							href={SPONSOR_LINK}
							className="bg-zinc-100/75 dark:bg-zinc-900 flex p-1 items-center col-span-1"
						>
							<Image
								className="max-h-full w-full rounded-md object-contain filter grayscale hover:grayscale-0 dark:hover:invert-0 transition-all dark:invert duration-300 ease-in-out"
								src="/lemon-gold.png"
								alt="gold"
								width={400}
								height={300}
							/>
						</a>
						<a
							href={SPONSOR_LINK}
							className="bg-zinc-100/75 dark:bg-zinc-900 flex p-1 items-center col-span-1"
						>
							<Image
								className="max-h-full w-full rounded-md object-contain filter grayscale hover:grayscale-0 dark:hover:invert-0 transition-all dark:invert duration-300 ease-in-out"
								src="/lemon-gold.png"
								alt="gold"
								width={400}
								height={300}
							/>
						</a>
						<a
							href={SPONSOR_LINK}
							className="bg-zinc-100/75 dark:bg-zinc-900 p-1 flex items-center col-span-1"
						>
							<Image
								className="max-h-full w-full object-contain rounded-md filter grayscale hover:grayscale-0 dark:hover:invert-0 transition-all dark:invert duration-300 ease-in-out"
								src="/lemon-silver.png"
								alt="silver"
								width={400}
								height={300}
							/>
						</a>
						<a
							href={SPONSOR_LINK}
							className="bg-zinc-100/75 dark:bg-zinc-900 p-1 flex items-center col-span-1"
						>
							<Image
								className="max-h-full w-full object-contain rounded-md filter grayscale hover:grayscale-0 dark:hover:invert-0 transition-all dark:invert duration-300 ease-in-out"
								src="/lemon-silver.png"
								alt="silver"
								width={400}
								height={300}
							/>
						</a>
						<a
							href={SPONSOR_LINK}
							className="bg-zinc-100/75 dark:bg-zinc-900 p-1 flex items-center col-span-1"
						>
							<Image
								className="max-h-full w-full object-contain rounded-md filter grayscale hover:grayscale-0 dark:hover:invert-0 transition-all dark:invert duration-300 ease-in-out"
								src="/lemon-silver.png"
								alt="silver"
								width={400}
								height={300}
							/>
						</a>
						<a
							href={SPONSOR_LINK}
							className="bg-zinc-100/75 dark:bg-zinc-900 p-1 flex items-center col-span-1"
						>
							<Image
								className="max-h-full w-full object-contain rounded-md filter grayscale hover:grayscale-0 dark:hover:invert-0 transition-all dark:invert duration-300 ease-in-out"
								src="/lemon-silver.png"
								alt="silver"
								width={400}
								height={300}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
