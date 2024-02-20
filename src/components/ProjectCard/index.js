import Image from "next/image";

function ImagePreview({ src }) {
	return (
		<div className="relative w-full max-w-[520px] h-[283px] lg:h-[608px] rounded-3xl bg-background border-[12px] shadow-inner border-black/40 dark:border-white/40 overflow-hidden">
			<Image src={src} alt="" fill className="object-cover w-full h-full" />
		</div>
	);
}

export function ProjectCard(props) {
	const { title, descr, image } = props;

	return (
		<div className="flex flex-col lg:flex-row place-items-center lg:place-items-start gap-8 sticky top-0 left-0 bg-background lg:bg-transparent">
			<ImagePreview src={image} />

			<div className="bg-background">
				<div className="grid gap-y-4 max-w-[559px] lg:pt-10">
					<h3 className="font-h text-3xl">{title}</h3>
					<p className="font-p text-sm">{descr}</p>
				</div>
			</div>
		</div>
	);
}
