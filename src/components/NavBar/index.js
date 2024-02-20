"use client";

import { useEffect, useState } from "react";

import { Logo } from "../Logo";
import { NavItems } from "./NavItems";
import { ContactMe } from "../ContactMe";
import { ThemeSwitcher } from "../ThemeSwitcher";

export function NavBar() {
	const [lastScroll, setLastScroll] = useState(0);

	useEffect(() => {
		const body = document.body;

		const handleWindowScroll = () => {
			const currentScroll = window.scrollY;

			if (currentScroll <= 0) {
				body.classList.remove("scroll-up");
			}

			if (
				currentScroll > lastScroll &&
				!body.classList.contains("scroll-down")
			) {
				body.classList.remove("scroll-up");
				body.classList.add("scroll-down");
			}

			if (
				currentScroll < lastScroll &&
				body.classList.contains("scroll-down")
			) {
				body.classList.remove("scroll-down");
				body.classList.add("scroll-up");
			}

			setLastScroll(currentScroll);
		};

		window.addEventListener("scroll", handleWindowScroll);

		return () => {
			window.removeEventListener("scroll", handleWindowScroll);
		};
	}, [lastScroll]);
	return (
		<nav className="z-[9999] w-full bg-background">
			<div className="container flex items-center justify-between py-2">
				<Logo />
				<div className="flex gap-x-4 lg:gap-x-20">
					<NavItems />
					<div className="lg:block hidden">
						<ContactMe />
					</div>
					<ThemeSwitcher />
				</div>
			</div>
		</nav>
	);
}
