import { IconCircleDashed, IconCircleDashedCheck } from "@tabler/icons-react";

export function RoadmapAchievement({
	title,
	completed,
}: { title: string; completed: boolean }) {
	return (
		<p className="text-muted-foreground text-sm relative pl-5 mt-1">
			{completed ? (
				<IconCircleDashedCheck
					className="shrink-0 absolute top-0.5 left-0"
					size={16}
				/>
			) : (
				<IconCircleDashed
					className="shrink-0 absolute top-0.5 left-0"
					size={16}
				/>
			)}{" "}
			{title}
		</p>
	);
}
