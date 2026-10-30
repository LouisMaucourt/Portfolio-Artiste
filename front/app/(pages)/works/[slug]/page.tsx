import { notFound } from "next/navigation";
import { Work } from "@/components/Work";
import { client } from "@/sanity/client";
import { NEXT_WORK_QUERY, WORK_QUERY, options } from "@/sanity/query";

type NextWork = {
	title: string;
	slug: string;
};

export async function generateStaticParams() {
	const works = await client.fetch<NextWork[]>(NEXT_WORK_QUERY, {}, options);

	return works.map(({ slug }) => ({ slug }));
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const [post, works] = await Promise.all([
		client.fetch(WORK_QUERY, { slug }, options),
		client.fetch<NextWork[]>(NEXT_WORK_QUERY, {}, options),
	]);

	if (!post) notFound();

	const currentIndex = works.findIndex((work) => work.slug === slug);
	const nextWork = works[(currentIndex + 1) % works.length];

	return <Work data={post} nextWork={nextWork} />;
}
