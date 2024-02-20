import Link from "next/link";
import { Fragment } from "react";
import { Menu, Xmark } from "iconoir-react";
import { Popover, Transition } from "@headlessui/react";

import { ContactMe } from "../ContactMe";

const links = [
	{
		label: "home",
		href: "/#home",
	},
	{
		label: "about",
		href: "#about",
	},
	{
		label: "work",
		href: "#work",
	},
];

export function NavItems() {
	return (
		<>
			{/* Tablet / Desktop View Only */}
			<div className="items-center gap-x-6 hidden lg:flex">
				{links.map(({ label, href }) => (
					<Link href={href} key={label} className="font-p uppercase text-sm">
						{label}
					</Link>
				))}
			</div>

			{/* Mobile View Only */}
			<div className="lg:hidden">
				<Popover className="relative">
					{({ open }) => (
						<>
							<Popover.Button className="p-2 bg-muted rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-0">
								{open ? (
									<Xmark width={24} height={24} aria-hidden="false" />
								) : (
									<Menu width={24} height={24} aria-hidden="true" />
								)}
							</Popover.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="mt-3 w-screen fixed left-0 right-0 px-4 top-16">
									{({ close }) => (
										<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 border border-border">
											<div className="relative grid gap-8 bg-background p-7 lg:grid-cols-2">
												{links.map(({ href, label }) => (
													<Link
														key={label}
														onClick={() => close()}
														href={href}
														className="capitalize font-p text-sm font-medium text-foreground -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-muted focus:outline-none"
													>
														{label}
													</Link>
												))}
											</div>
											<div className="bg-muted p-4">
												<ContactMe className="w-full" />
											</div>
										</div>
									)}
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
			</div>
		</>
	);
}
