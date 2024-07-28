import { Supporters } from "@/components/section/supporters";
import Image from "next/image";

export function Hero() {
	return (
		<>
			<h1 className="sm:text-5xl text-4xl font-bold text-center my-14 px-8 text-balance">
				Privacy focused income & expense tracking app.
			</h1>
			<Supporters />
			<Image
				alt="Giderim App"
				priority
				src="/app.png"
				width={400}
				height={300}
				className="mx-auto"
			/>
		</>
	);
}
