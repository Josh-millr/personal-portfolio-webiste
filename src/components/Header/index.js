"use client";

import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";

import data from "@/data/portfolio.json";

import { AvatarTag } from "../AvatarTag";

export function Header() {
	const { experiencedFrom, headerTagline } = data;

	const eased = cubicBezier(0.78, 0, 0.13, 0.99);

	return (
		<header className="relative">
			{/* Background Image */}
			<motion.div
				animate={{ y: "0%" }}
				transition={{ ease: eased, duration: 0.5 }}
				initial={{ y: "-100%" }}
				className="bg-gray-500 absolute z-[-10] top-0 left-0 w-full h-full home-header"
			/>

			<div className="container pt-28 pb-24 flex flex-col lg:flex-row gap-y-14 gap-x-11 items-center">
				{/* Avatar Image */}
				<div className="relative overflow-hidden order-last lg:order-first">
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: "0%" }}
						transition={{ delay: 0.9, ease: "easeInOut" }}
					>
						<AvatarTag />
					</motion.div>
				</div>

				<div className="text-center lg:text-start text-white lg:pt-6">
					<div className="relative overflow-hidden">
						<motion.p
							initial={{ y: "-100%" }}
							animate={{ y: "0%" }}
							transition={{
								delay: 0.4,
								ease: eased,
								duration: 0.6,
							}}
							className="font-p text-base"
						>
							({experiencedFrom} - PRESENT)
						</motion.p>
					</div>
					<div className="relative overflow-hidden">
						<motion.h1
							initial={{ y: "-100%" }}
							animate={{ y: "0%" }}
							transition={{
								delay: 0.6,
								ease: eased,
								duration: 0.6,
							}}
							className="font-h text-5xl lg:text-6xl uppercase max-w-[654px]"
						>
							{headerTagline}
						</motion.h1>
					</div>
				</div>
			</div>
		</header>
	);
}
