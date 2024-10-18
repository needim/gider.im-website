"use client";

import { AnimatePresence, type Variants, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface HyperTextProps {
	text: string;
	duration?: number;
	framerProps?: Variants;
	className?: string;
	animateOnLoad?: boolean;
}

const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
	text,
	duration = 800,
	framerProps = {
		initial: { opacity: 0, y: -10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 3 },
	},
	className,
	animateOnLoad = true,
}: HyperTextProps) {
	const [displayText, setDisplayText] = useState(text.split(""));
	const [trigger, setTrigger] = useState(false);
	const interations = useRef(0);
	const isFirstRender = useRef(true);

	const triggerAnimation = () => {
		interations.current = 0;
		setTrigger(true);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const interval = setInterval(
			() => {
				if (!animateOnLoad && isFirstRender.current) {
					clearInterval(interval);
					isFirstRender.current = false;
					return;
				}
				if (interations.current < text.length) {
					setDisplayText((t) =>
						t.map((l, i) =>
							l === " "
								? l
								: i <= interations.current
									? text[i]
									: alphabets[getRandomInt(26)],
						),
					);
					interations.current = interations.current + 0.1;
				} else {
					setTrigger(false);
					clearInterval(interval);
				}
			},
			duration / (text.length * 10),
		);

		const loopInterval = setInterval(() => {
			triggerAnimation();
		}, 5000);

		// Clean up interval on unmount
		return () => {
			clearInterval(loopInterval);
			clearInterval(interval);
		};
	}, [text, duration, trigger, animateOnLoad]);

	return (
		<span
			className="overflow-hidden py-2 inline-flex cursor-default scale-100"
			onMouseEnter={triggerAnimation}
		>
			<AnimatePresence mode="popLayout">
				{displayText.map((letter, i) => (
					<motion.span
						key={i}
						className={cn(
							"font-mono relative",
							letter === " " ? "w-auto" : "",
							className,
						)}
						{...framerProps}
					>
						{letter}
					</motion.span>
				))}
			</AnimatePresence>
		</span>
	);
}
