"use client";

import { Logo } from "../Logo";
import { NavItems } from "./NavItems";
import { ContactMe } from "../ContactMe";
import { ThemeSwitcher } from "../ThemeSwitcher";

export function NavBar() {
	return (
		<nav className="container flex items-center justify-between sticky top-0 z-10 py-8">
			<Logo />
			<div className="flex gap-x-4 lg:gap-x-20">
				<NavItems />
				<div className="lg:block hidden">
					<ContactMe />
				</div>
				<ThemeSwitcher />
			</div>
		</nav>
	);
}
