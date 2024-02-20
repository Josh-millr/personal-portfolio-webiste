import Image from "next/image";

import { cn } from "@/lib/utils";
import data from "@/data/portfolio.json";

const { avatar } = data;

export function AvatarTag(props) {
	const { className } = props;

	return (
		<div
			className={cn(
				"avatar-tag-border relative w-[216px] rounded-[40px] border-white/20 border-8 overflow-hidden",
				className
			)}
		>
			<div className="w-full h-full relative">
				<Image fill src={avatar} className="object-cover" alt="" />
			</div>
			<div className="absolute left-[5%] top-[220px] w-[90%] m-auto z-10 flex place-content-center whitespace-nowrap overflow-hidden rounded-full bg-white/90 text-[#060908]/80 text-sm font-p uppercase py-3">
				JOSH E. MILLER
			</div>
		</div>
	);
}
