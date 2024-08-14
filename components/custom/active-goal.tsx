export function ActiveGoal({
	goal,
	firstMonthlySponsor,
	monthlySponsorCount,
}: {
	goal: ActiveGoal;
	firstMonthlySponsor?: SponsorsNode;
	monthlySponsorCount: number;
}) {
	return (
		<div className="border rounded-xl py-2 px-3 relative z-10 bg-zinc-50 dark:bg-zinc-900">
			<h4 className="sr-only">Goal status</h4>
			<p className="text-sm font-medium whitespace-nowrap">
				{goal.percentComplete}% towards {goal.targetValue} monthly sponsors goal
			</p>
			<div aria-hidden="true" className="mt-1">
				<div className="overflow-hidden rounded-full bg-zinc-200">
					<div
						style={{ width: "13%" }}
						className="h-2 rounded-full sponsors-goal-progress-bar bg-[#ec6cb9]"
					/>
				</div>
				<div className="mt-1 text-xs font-medium text-gray-600">
					<div className="text-muted-foreground whitespace-nowrap">
						{firstMonthlySponsor?.login} and {monthlySponsorCount} others
						sponsor this goal
					</div>
				</div>
			</div>
		</div>
	);
}
