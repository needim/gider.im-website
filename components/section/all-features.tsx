import { Badge } from "@/components/ui/badge";
import { IconCheck } from "@tabler/icons-react";

const features = [
	{
		name: "Track Transactions",
		description: "Mark transactions as paid or unpaid for easy tracking.",
	},
	{
		name: "Offline Support",
		description: "Track your finances even when you’re offline.",
	},
	{
		name: "Multiple Currencies",
		description: "Track your finances in multiple currencies.",
	},
	{
		name: "Recurring Transactions",
		description: "Set up recurring transactions for easy tracking.",
	},
	{
		name: "Groups & Tags",
		description: "Organize your transactions with groups and tags.",
	},
	{
		name: "Filters",
		description: "Find transactions quickly with filter options.",
	},
	{
		name: "Multiple-Device Sync",
		description: "Sync your data across multiple devices securely.",
	},
	{
		name: "Insights",
		description: "Get insights into your finances with charts and graphs.",
		soon: true,
	},
	{
		name: "Notifications",
		description: "Get notifications for upcoming transactions.",
		soon: true,
	},
	{
		name: "Investment Tracking",
		description: "Track your investments and monitor your portfolio.",
		soon: true,
	},
];

export function AllFeatures() {
	return (
		<div className=" py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					<div>
						<h2 className="text-base font-medium leading-7 text-blue-500">
							Everything you need
						</h2>
						<p className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
							All-in-one application
						</p>
						<p className="mt-6 text-base leading-7 text-muted-foreground text-balance">
							gider.im simplifies financial tracking with a user-friendly,
							ad-free experience that respects your privacy. Your data is
							encrypted and exclusively yours, with no registration required.{" "}
							<br />
							<br />
							It’s secure, syncs across devices, and offers insights to keep
							your financial life on track.
						</p>
					</div>
					<dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-muted-foreground sm:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-9">
								<dt className="font-medium text-lg text-zinc-950 flex">
									<IconCheck
										aria-hidden="true"
										className="absolute left-0 top-1 h-5 w-5 text-blue-500"
									/>
									{feature.name}{" "}
									{feature.soon && (
										<Badge color="blue" className="ml-1">
											Coming soon
										</Badge>
									)}
								</dt>
								<dd className="mt-2">{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
