"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
	{ href: "/works", label: "Oeuvres" },
	{ href: "/biographie", label: "Biographie" },
	{ href: "/curriculum", label: "Curriculum" },
	{ href: "/contact", label: "Contact" },
];

export default function NavBar() {
	const [open, setOpen] = useState(false);

	const textColor = open ? "text-white" : "text-inherit";

	return (
		<div className="sticky top-4 z-50 w-full">
			<div className="relative z-50 flex items-center justify-between px-5 transition-[opacity,translate] duration-1200 delay-2200 ease-expo starting:-translate-y-2 starting:opacity-0 motion-reduce:transition-none">
				<h1 className={`font-medium uppercase ${textColor}`}>
					<Link href="/" onClick={() => setOpen(false)}>
						Charlotte Maucourt
					</Link>
				</h1>

				<button
					onClick={() => setOpen(!open)}
					type="button"
					aria-label="Toggle menu"
					aria-expanded={open}
					className={`cursor-pointer p-2 uppercase font-medium ${textColor}`}
				>
					{open ? "Fermer" : "Menu"}
				</button>
			</div>
			<nav
				aria-hidden={!open}
				inert={!open}
				className={`fixed inset-x-0 top-0 z-40 overflow-hidden bg-foreground pt-20 text-white transition-all duration-600 ease-in-out ${
					open
						? "pointer-events-auto max-h-[600px] translate-y-0 opacity-100"
						: "pointer-events-none max-h-0 -translate-y-4 opacity-0"
				}`}
			>
				<div className="flex flex-col justify-between p-5 pt-4">
					<ul className="space-y-1.5 uppercase">
						{links.map((link) => (
							<li key={link.label}>
								<Link href={link.href} onClick={() => setOpen(false)}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>

					<div className="mt-10 flex flex-col text-sm uppercase">
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
