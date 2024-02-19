"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function ContactMe(props) {
	const { className, ...others } = props;
	return (
		<Button className={cn("font-p rounded-full", className)} {...others}>
			Contact Me
		</Button>
	);
}
