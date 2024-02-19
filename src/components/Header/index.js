"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";

import data from "@/data/portfolio.json";

import { NavBar } from "../NavBar";
import { AvatarTag } from "../AvatarTag";

const { experiencedFrom, headerTagline } = data;

export function Header() {
	const container = useRef();

	useGSAP(
		() => {
			// gsap code here...

			gsap.to(".home-header", {
				scrollTrigger: ".home-header",
				x: 500,
			});
		},
		{ scope: container }
	);
	return (
		<header className="home-header">
			<NavBar />

			<div className="container pt-20 pb-10 flex flex-col lg:flex-row gap-y-14 gap-x-11 items-center">
				<AvatarTag className="order-last lg:order-first" />

				<div className="text-center lg:text-start text-white lg:pt-6">
					<p className="font-p text-base">({experiencedFrom} - PRESENT)</p>
					<h1 className="font-h text-5xl lg:text-6xl uppercase max-w-[654px]">
						{headerTagline}
					</h1>
				</div>
			</div>
		</header>
	);
}
