import Link from "next/link";

import data from "@/data/portfolio.json";

export function Logo() {
	return (
		<Link
			href="#"
			className="font-semibold font-p px-4 py-2 rounded-full border-white text-white border-4 bg-black/20"
		>
			{data.name}.
		</Link>
	);
}
