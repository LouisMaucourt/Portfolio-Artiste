import type { Post } from "../sanity/query";
import Link from "next/link";
import { urlFor } from "../sanity/sanityImgUrl";
import Image from "next/image";
import { ViewTransition } from "react";
import { PortableText } from "next-sanity";

const PLACEMENTS = [
	"xl:self-start",
	"xl:self-start xl:ml-[10%]",
	"xl:self-start xl:ml-[25%]",
	"xl:self-center",
	"xl:self-end xl:mr-[10%]",
	"xl:self-end",
] as const;

const pick = (id: string) =>
	[...id].reduce((sum, c) => sum + c.charCodeAt(0), 0) % PLACEMENTS.length;

export const Works = ({ data }: { data: Post[] }) => {
	const posts = data.filter((post) => post.image);
	return (
		<ul className="flex flex-col gap-10 xl:gap-10">
			{posts.map((post, i) => (
				<li
					key={post.slug}
					className={`xl:my-24 w-full xl:max-w-2/3 scroll-img ${PLACEMENTS[i === 0 ? 0 : pick(post._id)]}`}
				>
					<Link
						href={`/works/${post.slug}`}
						className="group block xl:pb-28 pb-2"
					>
						<div className="relative w-fit max-w-full flex flex-col gap-1">
							<Image
								src={urlFor(post?.image)?.url()}
								alt={post.title ?? ""}
								width={1920}
								height={1080}
								priority
								className="h-auto max-h-[80vh] w-auto max-w-full object-contain duration-300"
							/>
							<div className="w-0 min-w-full xl:group-hover:underline">
								<PortableText value={post.description} />
							</div>
							<p>{new Date(post.date).toLocaleDateString("fr-FR")}</p>
							<h2 className="text-bold min-w-full xl:group-hover:underline underline">
								{post.title}
							</h2>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};
