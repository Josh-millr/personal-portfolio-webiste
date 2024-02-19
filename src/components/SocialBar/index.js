import Link from "next/link";

import { cn } from "@/lib/utils";
import data from "@/data/portfolio.json";
import { buttonVariants } from "@/components/ui/button";

const { socials } = data;

export function SocialBar() {
	return (
		<div className="container py-8 flex gap-3 justify-center lg:justify-start flex-wrap">
			{socials.map(({ id, title, link }) => (
				<Link
					target="_blank"
					href={link}
					key={id}
					className={cn(
						buttonVariants({ variant: "outline" }),
						"font-p px-4 py-3 rounded-full"
					)}
				>
					{title}
				</Link>
			))}
		</div>
	);
}
