import Image from "next/image";

import data from "@/data/portfolio.json";

import { ContactMe } from "../ContactMe";
import { SectionTitle } from "../SectionTitle";
import { Badge } from "../ui/badge";

export function AboutMe() {
	const { avatar, fullName, bio, testimonial } = data;

	return (
		<section>
			<SectionTitle id="about">About.</SectionTitle>

			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-[auto_auto] gap-10">
					<div className="grid gap-4">
						<div className="relative rounded-[40px] h-[164px] w-[192px]">
							<Image fill src={avatar} className="object-cover" alt="" />
						</div>
						<Badge
							variant="secondary"
							className="font-p text-sm uppercase px-5 py-4 flex place-content-center w-fit"
						>
							{fullName}
						</Badge>
					</div>
					<p className="font-h text-xl">{bio}</p>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row pt-20 gap-10 lg:gap-x-6 lg:pb-20 lg:container">
				<div className="w-full lg:w-[40%] flex place-content-center lg:order-2">
					<div className="relative rounded-[40px] bg-slate-600 w-[324px] h-[324px] p-4">
						<Image
							fill
							src="/images/testimonial-picture.png"
							className="object-cover"
							alt=""
						/>

						<div className="absolute w-full h-full bg-black/30 top-0 left-0"></div>

						<div className="flex flex-col justify-between relative top-10 h-[80%]">
							<h4 className="font-h text-2xl text-white">
								{testimonial.message}
							</h4>

							<Badge className="capitalize font-p py-2 px-4 bg-white/40 text-white text-base w-fit">
								{testimonial.name}
							</Badge>
						</div>
					</div>
				</div>
				<div className="h-[323px] w-full lg:order-1">
					<div className="relative w-full h-full lg:rounded-[60px] flex">
						<Image
							fill
							className="object-cover"
							alt=""
							src="/images/noisy-background.png"
						/>
						<div className="relative top-10 grid gap-10 m-auto place-items-center">
							<h1 className="font-h text-6xl text-center capitalize text-white">
								{"Let's"} work
								<br /> together
							</h1>
							<ContactMe className="w-fit bg-white text-black" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
