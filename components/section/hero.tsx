import { features } from "@/components/section/features";
import { Supporters } from "@/components/section/supporters";
import Image from "next/image";

export function Hero() {
	return (
		<>
			<div className="mx-auto flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-20 lg:items-start pt-8 xl:px-0">
				<div className="flex flex-col gap-4 lg:gap-8 md:gap-8 items-center justify-center text-center lg:text-left lg:items-start lg:px-6 xl:px-0">
					<h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:mt-4 tracking-tight flex flex-col gap-3 items-center lg:items-start text-balance">
						Privacy focused income & expense tracking app.
					</h1>
					<div className="flex flex-row md:max-w-lg justify-center lg:justify-start flex-wrap gap-x-2 gap-y-1">
						{features.map((feature) => (
								<div key={feature.name} className="flex gap-1 items-center">
									{feature.icon}
									<div className="text-lg text-balance">{feature.name}</div>
								</div>
						))}
					</div>
					<div className="">
						<Supporters />
					</div>
				</div>
				<div className="relative max-w-full lg:w-full overflow-hidden">
					<Image
						alt="Giderim App"
						priority
						src="/mockup.png"
						width={755}
						height={1017}
						className="mx-auto max-w-full relative -right-20 md:max-w-md md:-right-10 lg:right-0 xl:-right-8"
					/>
				</div>
			</div>
		</>
	);
}
