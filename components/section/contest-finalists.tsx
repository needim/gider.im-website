import Link from "next/link";
import React from "react";

export function ContestFinalists() {
	const finalists = [
		{
			name: "Ceren",
			xHandle: "unwritten_",
			avatarUrl:
				"https://pbs.twimg.com/profile_images/830122878704168960/eK_iIkOD_400x400.jpg",
			imageUrl: "/contest/ceren.png",
			figmaUrl:
				"https://www.figma.com/design/9C9ciWZaDLozIBJxSIfs8Z/giderim-app-design-competition-%3A-ceren?node-id=0-1&t=ihDvO7VKF9VECXgc-1",
		},
		{
			name: "Numan",
			avatarUrl:
				"https://pbs.twimg.com/profile_images/1769398336098844672/7IZRhHNE_400x400.jpg",
			imageUrl: "/contest/numan.png",
			figmaUrl:
				"https://www.figma.com/design/g7rZYlGlPU3v9haE60Um9r/gider.im?node-id=215-4876&t=gy6hk8cmGwgmpcLo-1",
			xHandle: "numanguness",
		},
		{
			name: "Oktay",
			avatarUrl:
				"https://pbs.twimg.com/profile_images/1804890323736231936/x-fgnRKp_400x400.jpg",
			xHandle: "Okcaworkshop",
			imageUrl: "/contest/oktay.png",
			figmaUrl:
				"https://www.figma.com/design/KJ7lWqaGAsl1Kn8G0BgkeZ/Gider.im?node-id=0-1&t=pg9mHhQikKznO3Hn-1",
		},
		{
			name: "Sedef",
			xHandle: "sedefhcylmz1",
			avatarUrl:
				"https://pbs.twimg.com/profile_images/1280939973018112000/UNEDyCg1_400x400.jpg",
			imageUrl: "/contest/sedef.png",
			figmaUrl:
				"https://www.figma.com/design/eBh7j7qHRbz5vFANNf2eHB/Sedef-Hi%C3%A7y%C4%B1lmaz_Gider.im?node-id=0-1&t=LJ567gikLdI8Iv4j-1",
		},
	];

	return (
		<div className="py-12 sm:py-14 max-w-5xl mx-auto">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Contest Finalists
					</h2>
					<p className="mt-2 text-lg leading-8 text-muted-foreground text-balance">
						Top 4 designs from the gider.im app design competition. View the
						designs on Figma and vote for your favorite design.
					</p>
				</div>
				<ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-2 gap-y-20 sm:grid-cols-4 lg:max-w-4xl lg:gap-x-2 xl:max-w-none">
					{finalists.map((person) => (
						<li
							key={person.name}
							className="group flex flex-col gap-6 text-center group transition-transform duration-500 hover:-translate-y-4"
						>
							<Link
								href={person.figmaUrl}
								target="_blank"
								className="mx-auto relative"
							>
								<img
									alt=""
									src={person.imageUrl}
									className="w-52 flex-none rounded-2xl object-top object-cover grayscale group-hover:grayscale-0 transition-filter duration-300"
								/>
								<div className="absolute -bottom-px w-full pb-20 pt-56 bg-gradient-to-t dark:from-zinc-950 from-white dark:via-zinc-900/80 via-zinc-300/80 to-transparent rounded-b-[32px] transition-opacity group-hover:opacity-90 duration-150">
									<div className="flex flex-col items-center">
										<svg
											width="54"
											height="80"
											viewBox="0 0 54 80"
											fill="none"
											className="size-8 mb-2"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_912_3)">
												<path
													d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z"
													fill="#0ACF83"
												/>
												<path
													d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z"
													fill="#A259FF"
												/>
												<path
													d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z"
													fill="#F24E1E"
												/>
												<path
													d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z"
													fill="#FF7262"
												/>
												<path
													d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z"
													fill="#1ABCFE"
												/>
											</g>
											<defs>
												<clipPath id="clip0_912_3">
													<rect width="53.3333" height="80" fill="white" />
												</clipPath>
											</defs>
										</svg>
										Preview on Figma
									</div>
								</div>
							</Link>
							<div className="flex-auto group-hover:translate-y-4 transition-transform duration-500">
								<h3 className="text-lg font-semibold leading-8 tracking-tight flex flex-col">
									<span>{person.name}</span>
									<span className="text-sm font-normal">@{person.xHandle}</span>
								</h3>
								<Link
									target="_blank"
									href={`https://x.com/${person.xHandle}`}
									className="text-base leading-7 inline-flex items-center mt-2"
								>
									<svg
										fill="currentColor"
										viewBox="0 0 20 20"
										aria-hidden="true"
										className="h-5 w-5 mr-1"
									>
										<path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
									</svg>
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
