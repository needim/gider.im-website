import { cn } from "@/lib/utils";
import Link from "next/link";

export function ContestAttendees() {
	const featuredAttendee = {
		comment:
			"I liked the color trick in the header according to the result of the month, the use of colors, and the redesign of the settings. I wish we could have chosen 5 designs instead of just 4.",
		user: {
			name: "Utku Gürbüz",
			handle: "utkgrb",
			imageUrl:
				"https://pbs.twimg.com/profile_images/1813151505660231680/ut7o73AN_400x400.jpg",
		},
	};
	const attendees = [
		[
			[
				{
					comment:
						"Using Figma components, color usage, and minimal graphics are very nice. Clean design.",
					user: {
						name: "Mustafa Pekkirişci",
						handle: "pekkiriscim",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1609598043229229057/kHpti_Uv_400x400.jpg",
					},
				},
				{
					comment:
						"It's good that you used components and prepared a prototype. Creating tags on the fly could be a workflow to consider.",
					user: {
						name: "Gonca Özkutlu",
						handle: "gonca_ozkutlu",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1806688002803937280/Lsck8c6Y_400x400.jpg",
					},
				},
				{
					comment:
						"I liked that you created and used a design system, moved the language selection to the first welcome screen, and liked the goals feature.",
					user: {
						name: "Vusal",
						handle: "vusalamrahov",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1808967041845460992/gIDRUqqS_400x400.jpg",
					},
				},
			],
			[
				{
					comment:
						"Moving the month navigation to the top was a good choice, as it's not a frequently used feature. Additionally, I liked your work on the dark mode.",
					user: {
						name: "Tuna Taşmaz",
						handle: "tunatasmaz",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1783167022341275657/N6XjPsPM_400x400.jpg",
					},
				},
				{
					comment:
						"Hiding amounts and notifications are nice features. Preparing flows with the prototype earns you extra points.",
					user: {
						name: "sfi",
						handle: "sfi_designs",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1799771424900464640/qyBOJ_SY_400x400.jpg",
					},
				},
				{
					comment:
						"There are nice touches, but you need to reduce the use of borders.",
					user: {
						name: "İlkcan Köse",
						handle: "ilkcanui",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1797505984388030464/Q_-SKzVF_400x400.jpg",
					},
				},
			],
		],
		[
			[
				{
					comment:
						"I liked the notes on paper and pen. The custom UI you've thought of for the new entry screen is quite unique.",
					user: {
						name: "Vasıf Baran Fidan",
						handle: "vbfidan",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1766179486263824384/Z_jPVzGk_400x400.jpg",
					},
				},
				{
					comment:
						"The budget logic is good. It makes sense to divide into pages instead of using an accordion. A spending limit could be a nice feature. Prototype is nice.",
					user: {
						name: "dls 🦖",
						handle: "ssylbre",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1644068827511115778/TJGmvmrQ_400x400.jpg",
					},
				},
				{
					comment: "The idea of a native app is good.",
					user: {
						name: "Bora Mert",
						handle: "boramertss",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1817598754138001408/clmAnDmI_400x400.jpg",
					},
				},
			],
			[
				{
					comment:
						"Using Figma components, your use of color and fonts, and the icon feature for categories are very nice. Beautiful.",
					user: {
						name: "Buse",
						handle: "buseturgay",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1633022330971594752/nTz4yPMR_400x400.jpg",
					},
				},
				{
					comment:
						"It's nice that you designed it thinking as a web application. I liked the way you display data and the structure of the modals.",
					user: {
						name: "Aykut Korkmaz",
						handle: "AykutKorkmazX",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1740832435552550912/BS8wftL-_400x400.jpg",
					},
				},
				{
					comment:
						"You've given me a different perspective for the annual view. It's nice that you prepared a prototype.",
					user: {
						name: "Elif",
						handle: "sewepsiz",
						imageUrl:
							"https://pbs.twimg.com/profile_images/1614369178785398787/ve2LpiWq_400x400.jpg",
					},
				},
			],
		],
	];

	return (
		<div className="relative isolate pb-32 pt-12">
			<div className="mx-auto max-w-full px-6 lg:px-8">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="text-lg font-semibold leading-8 tracking-tight text-sky-600 dark:text-sky-300">
						Attendees
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-balance  sm:text-4xl">
						Thanks for joining me at the event!
					</p>
					<p className="text-muted-foreground text-balance mt-2 text-lg">
						Here are my thoughts on our attendees.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
					<figure className="rounded-2xl bg-white dark:bg-zinc-800 shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
						<Link
							target="_blank"
							href={`https://x.com/${featuredAttendee.user.handle}`}
							className="flex flex-wrap items-center gap-x-4 gap-y-4 border-b border-zinc-900/10 dark:border-zinc-100/10 px-6 py-4 sm:flex-nowrap hover:underline"
						>
							<img
								alt=""
								src={featuredAttendee.user.imageUrl}
								className="h-10 w-10 flex-none rounded-full bg-gray-50"
							/>
							<div className="flex-auto">
								<div className="font-semibold">
									{featuredAttendee.user.name}
								</div>
								<div className="text-muted-foreground">{`@${featuredAttendee.user.handle}`}</div>
							</div>
						</Link>
						<blockquote className="p-6 text-lg font-normal leading-7 tracking-tight sm:p-8 sm:py-6 sm:text-xl sm:leading-8">
							<p>
								{`“${featuredAttendee.comment}”`}{" "}
								<span className="text-muted-foreground font-normal whitespace-nowrap">
									— Nedim
								</span>
							</p>
						</blockquote>
					</figure>
					{attendees.map((columnGroup, columnGroupIdx) => (
						<div
							key={columnGroupIdx}
							className="space-y-8 xl:contents xl:space-y-0"
						>
							{columnGroup.map((column, columnIdx) => (
								<div
									key={columnIdx}
									className={cn(
										(columnGroupIdx === 0 && columnIdx === 0) ||
											(columnGroupIdx === attendees.length - 1 &&
												columnIdx === columnGroup.length - 1)
											? "xl:row-span-2"
											: "xl:row-start-1",
										"space-y-8",
									)}
								>
									{column.map((testimonial) => (
										<figure
											key={testimonial.user.handle}
											className="rounded-2xl bg-white dark:bg-zinc-800 px-6 py-4 shadow-lg ring-1 ring-gray-900/5"
										>
											<Link
												target="_blank"
												href={`https://x.com/${testimonial.user.handle}`}
												className="mb-4  flex items-center gap-x-4 hover:underline"
											>
												<img
													alt=""
													src={testimonial.user.imageUrl}
													className="h-10 w-10 rounded-full bg-gray-50"
												/>
												<div>
													<div className="font-semibold whitespace-nowrap">
														{testimonial.user.name}
													</div>
													<div className="text-muted-foreground">{`@${testimonial.user.handle}`}</div>
												</div>
											</Link>
											<hr className="border-t mb-4 border-zinc-900/10 dark:border-zinc-100/10 -mx-6" />
											<blockquote>
												<p>
													{`“${testimonial.comment}”`}{" "}
													<span className="text-muted-foreground whitespace-nowrap">
														— Nedim
													</span>
												</p>
											</blockquote>
										</figure>
									))}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
