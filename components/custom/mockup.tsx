import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { cn } from "@/lib/utils";

export function Mockup({ className, src }:{ className?:string ;src?:string }) {
	return (
		<div className={cn(
            "relative",
            className
        )}>
            <Iphone15Pro
                className="size-full p-12"
                src={src}
            />
        </div>
	);
}
