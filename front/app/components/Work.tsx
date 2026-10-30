import { PortableText } from "next-sanity";
import Image from "next/image";
import { ViewTransition } from "react";
import type { Post } from "../sanity/query";
import { urlFor } from "../sanity/sanityImgUrl";
import { TextFullScreen } from "./ui/TextFullScreen";
import { ArrowDown } from "lucide-react";
import { ScrollToTop } from "@/utlis/ScrollToTop";

type NextWork = {
	title: string;
	slug: string;
};

export const Work = ({
	data,
	nextWork,
}: {
	data: Post;
	nextWork: NextWork | null;
}) => {
	const exposition = data?.exposition;
	const images = data.gallery?.images?.filter((g) => g.asset) ?? [];

	return (
		<>
			<div className="flex flex-col gap-50">
				<TextFullScreen>
					<ViewTransition
						name={`work-${data.slug}`}
						share="morph"
						default="none"
					>
						<h2 className="scroll-fade text-6xl font-bold uppercase">
							{data.title}
						</h2>
					</ViewTransition>
					<div
						className="scroll-fade pointer-events-none fixed bottom-16 left-1/2 flex -translate-x-1/2"
						aria-hidden="true"
					>
						<div
							className="transition duration-1600 delay-1400 ease-expo
						starting:translate-y-8 starting:opacity-0
						motion-reduce:transition-none"
						>
							<ArrowDown
								className="motion-safe:animate-bounce [animation-duration:2s] [animation-delay:3s]"
								size={40}
								strokeWidth={1.2}
							/>
						</div>
					</div>
				</TextFullScreen>
				{images.length > 0 && (
					<div className="gallery relative z-10 flex flex-col gap-28 mb-[30svh]">
						{images.map((g) => (
							<div key={g.asset._ref} className="scroll-img">
								<Image
									src={urlFor(g).url()}
									alt={g.alt ?? ""}
									width={1920}
									height={1080}
									className="mx-auto xl:max-w-3/4 max-h-[80svh] w-full object-contain"
								/>
								<div className="mt-3 w-full ">
									<h2 className="underline">{data.title}</h2>
									<p>Photo : {g.credit}</p>
								</div>
							</div>
						))}
					</div>
				)}
				<section className="mx-auto flex h-svh w-full flex-col xl:max-w-3/4">
					<PortableText value={data.description} />

					<div
						className={`mt-30 grid grid-cols-1 gap-7 xl:gap-10 pb-28${
							exposition ? "lg:grid-cols-2" : ""
						}`}
					>
						<div className="divide-y">
							<h3 className="pb-6">Détails de l&apos;œuvre</h3>

							{data.title && (
								<div className="grid grid-cols-2 gap-4 pt-4 pb-7">
									<div>Titre</div>
									<h2>{data.title}</h2>
								</div>
							)}

							{data.date && (
								<div className="grid grid-cols-2 gap-4 pt-4 pb-7">
									<div>Année</div>
									<h2>{new Date(data.date).getFullYear()}</h2>
								</div>
							)}

							{data.material && (
								<div className="grid grid-cols-2 gap-4 pt-4 pb-7">
									<div>Matériaux</div>
									<div>
										<PortableText value={data.material} />
									</div>
								</div>
							)}

							{data.size && (
								<div className="grid grid-cols-2 gap-4 pt-4 pb-7">
									<div>Taille</div>
									<h2>{data.size}</h2>
								</div>
							)}
						</div>

						{exposition && (
							<div className="divide-y">
								<h3 className="pb-6">Exposition</h3>
								<div className="grid grid-cols-2 gap-4 pt-4 pb-7">
									<div>Lieu</div>
									<PortableText value={data.exposition} />
								</div>
							</div>
						)}
					</div>
				</section>
				{nextWork && (
					<a
						href={`/works/${nextWork.slug}`}
						className="mx-auto underline text-4xl mb-28"
					>
						Oeuvre suivante : {nextWork.title}{" "}
					</a>
				)}
			</div>
		</>
	);
};
