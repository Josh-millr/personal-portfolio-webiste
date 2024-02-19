import Image from "next/image";

function ImagePreview({ src }) {
	return (
		<div className="relative w-full max-w-[520px] h-[283px] lg:h-[608px] rounded-3xl bg-slate-500">
			<Image src={src} alt="" fill className="object-cover w-full h-full" />
		</div>
	);
}

export function ProjectCard(props) {
	const { title, descr, image } = props;

	return (
		<div className="flex flex-col lg:flex-row py-10 place-items-center lg:place-items-start gap-8">
			<ImagePreview src={image} />

			<div>
				<div className="grid gap-y-4 max-w-[559px] lg:pt-10">
					<h3 className="font-h text-3xl">{title}</h3>
					<p className="font-p text-sm">{descr}</p>
				</div>
			</div>
		</div>
	);
}
