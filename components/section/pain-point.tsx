import {
	IconBrandGithubFilled,
	IconEyeFilled,
	IconLockFilled,
	IconUserFilled,
} from "@tabler/icons-react";

const features = [
	{
		name: "Free & Open Source",
		description:
			"gider.im is completely open source, giving you access to the code and allowing you to use the app without any cost.",
		icon: IconBrandGithubFilled,
	},
	{
		name: "Secure & Encrypted",
		description:
			"Your financial data is secured with encryption, along with optional biometric authentication and passcode protection for extra security.",
		icon: IconLockFilled,
	},
	{
		name: "Local & Privacy First",
		description:
			"Your data is exclusively yours, with no data collection or tracking. We prioritize your privacy and never sell your information.",
		icon: IconEyeFilled,
	},
	{
		name: "No Ads & No Registration",
		description:
			"Unlike many finance apps, gider.im is ad-free with no registration required. You can start using it instantly with complete anonymity and freedom.",
		icon: IconUserFilled,
	},
];
export function PainPoint() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-medium leading-7 text-blue-500">
						Problem
					</h2>
					<p className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
						The Pain Point
					</p>
					<p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
						Managing finances can feel overwhelming, especially when data
						privacy and security are concerns. Many apps lack transparency and
						invade privacy.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-lg font-medium leading-7 text-zinc-950">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
										<feature.icon
											aria-hidden="true"
											className="h-6 w-6 text-blue-950"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
