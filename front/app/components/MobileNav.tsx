"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
    { href: "/", label: "Works" },
    { href: "/bio", label: "Bio" },
    { href: "/cv", label: "Cv" },
    { href: "/", label: "Contact" },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="xl:hidden fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between px-3 text-white bg-[var(--red)]">
                <h1 className="uppercase">Charlotte Maucourt</h1>
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    className="p-2 uppercase"
                >
                    {open ? "Fermer" : "Menu"}
                </button>
            </div>

            <nav
                className={`isolate absolute top-full left-0 w-full bg-[var(--red)] text-white overflow-hidden transition-all duration-800 ease-in-out ${open
                        ? "max-h-[500px] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-4"
                    }`}
            >
                <div className="flex flex-col justify-between p-4 pt-4">
                    <ul className="text-2xl space-y-">
                        {links.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} onClick={() => setOpen(false)}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col mt-10">
                        <Link href="https://www.instagram.com/charlotte.maucourt/" target="_blank">
                            IG: @charlotte.maucourt
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