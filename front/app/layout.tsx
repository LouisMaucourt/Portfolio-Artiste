import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import SmoothScrolling from "./components/SmoothScroll";

const neue = localFont({
	variable: "--font-neue",
	src: [
		{
			path: "../public/fonts/NeueHaasDisplayThin.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueHaasDisplayThinItalic.woff2",
			weight: "100",
			style: "italic",
		},
		{
			path: "../public/fonts/NeueHaasDisplayLight.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueHaasDisplayLightItalic.woff2",
			weight: "300",
			style: "italic",
		},
		{
			path: "../public/fonts/NeueHaasDisplayRoman.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueHaasDisplayRomanItalic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../public/fonts/NeueHaasDisplayMedium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueHaasDisplayMediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "../public/fonts/NeueHaasDisplayBold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueHaasDisplayBlack.woff2",
			weight: "900",
			style: "normal",
		},
	],
});

export const metadata: Metadata = {
	title: "Charlotte Maucourt",
	description: "Artiste",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="fr" className={`${neue.className} h-full antialiased`}>
			<body className="min-h-full">
				<NavBar />
				{/* <header className="hidden h-full fixed min-h-screen  border-r-2 text-black ">
					<nav className="flex flex-col justify-between h-full py-7 px-3">
						<div>
							<Link href={"/"}>
								<h1 className="logo font-medium mb-10 uppercase pl-2">
									<span>Charlotte</span> <br />{" "}
									<span className="tracking-wider">Maucourt</span>
								</h1>
							</Link>
							<ul className="text-xl uppercase gap-1 flex flex-col">
								<Link href={"/"}>
									<li className=" pl-2 hover:bg-white hover:text-[var(--red)] p-3">
										Works
									</li>
								</Link>
								<Link href={"/bio"}>
									<li className=" pl-2 hover:bg-white hover:text-[var(--red)] p-3">
										Bio
									</li>
								</Link>
								<Link href={"/cv"}>
									<li className=" pl-2 hover:bg-white hover:text-[var(--red)] p-3">
										CV
									</li>
								</Link>
								<Link href={"/contact"}>
									<li className=" pl-2 hover:bg-white hover:text-[var(--red)] p-3">
										Contact
									</li>
								</Link>
							</ul>
						</div>
						<div className="flex flex-col uppercase">
							<SubLabel>Contact</SubLabel>

							<Link
								href={"https://www.instagram.com/charlotte.maucourt/"}
								target="_blank"
								className=""
							>
								Instagram: @charlotte.maucourt
							</Link>
							<Link href="mailto:charlotte.maucourt@orange.fr">
								EMAIL: charlotte.maucourt@orange.fr
							</Link>
						</div>
					</nav>
				</header> */}

				<main className="w-full h-full p-5 mt-10 xl:mt-0 ">{children}</main>
			</body>
		</html>
	);
}
