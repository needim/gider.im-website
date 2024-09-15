import { features } from "@/components/section/features";
import { SupportCta } from "@/components/section/support-cta";
import { Supporters } from "@/components/section/supporters";
import Image from "next/image";

export function Hero() {
	return (
		<>
			<div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start pt-8 xl:px-0">
				<div className="flex flex-col gap-4 lg:gap-0 items-center justify-center text-center lg:text-left lg:items-start lg:px-6 xl:px-0">
					<h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl lg:mb-4 tracking-tight flex flex-col gap-3 items-center lg:items-start text-balance">
						Privacy focused income & expense tracking app.
					</h1>
					<div className="flex flex-row md:max-w-lg justify-center lg:justify-start flex-wrap gap-x-2 gap-y-1 mb-8">
						{features.map((feature) => (
							<div key={feature.name} className="flex gap-1 items-center">
								{feature.icon}
								<div className="text-lg text-balance">{feature.name}</div>
							</div>
						))}
					</div>
					<div className="mt-2">
						<Supporters />
					</div>
					<SupportCta className="mb-6" minimal />
				</div>
				<div className="relative lg:-mt-8 max-w-full lg:w-full overflow-hidden">
					<Image
						alt="Giderim App"
						priority
						src="/mockup.png"
						width={916}
						height={1302}
						className="mx-auto max-w-full relative -right-20 md:-right-36 lg:right-0"
					/>
				</div>
			</div>
		</>
	);
}
