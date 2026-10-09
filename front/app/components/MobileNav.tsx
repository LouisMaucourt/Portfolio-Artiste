"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
	{ href: "/", label: "Works" },
	{ href: "/bio", label: "Bio" },
	{ href: "/cv", label: "Cv" },
	{ href: "/contact", label: "Contact" },
];

export default function MobileNav() {
	const [open, setOpen] = useState(false);

	return (
		<div className="xl:hidden fixed top-0 left-0 w-full z-50 text-black border-b bg-[var(--white)]">
			<div className="flex items-center justify-between px-3">
				<h1 className="uppercase font-medium">
					<Link href={"/"}>Charlotte Maucourt</Link>
				</h1>
				<button
					onClick={() => setOpen(!open)}
					type="button"
					aria-label="Toggle menu"
					className="p-2 uppercase"
				>
					{open ? "Fermer" : "Menu"}
				</button>
			</div>
			<nav
				aria-hidden={!open}
				inert={!open}
				className={`xl:hidden fixed top-10 left-0 w-full z-40 bg-[var(--white)] border-b text-black overflow-hidden transition-all duration-600 ease-in-out ${
					open
						? "max-h-[500px] opacity-100 translate-y-0 pointer-events-auto"
						: "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
				}`}
			>
				<div className="flex flex-col justify-between p-4 pt-4">
					<ul className=" space-y-1.5 uppercase">
						{links.map((link) => (
							<li key={link.label}>
								<Link href={link.href} onClick={() => setOpen(false)}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>

					<div className="flex flex-col mt-10 uppercase text-sm">
						<Link
							href="https://www.instagram.com/charlotte.maucourt/"
							target="_blank"
						>
							INSTAGRAM: @charlotte.maucourt
						</Link>
						<Link href="mailto:charlotte.maucourt@orange.fr">
							EMAIL: charlotte.maucourt@orange.fr
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
}
