import { Suspense } from "react";
import { client } from "@/sanity/client";
import { type CV, CV_QUERY, options } from "@/sanity/query";
import { TextFullScreen } from "@/components/ui/TextFullScreen";
import { PortableText } from "next-sanity";

export default function Page() {
	return (
		<>
			<TextFullScreen title="Curriculum" />
			<Suspense fallback={<p>Chargement du parcours...</p>}>
				<CVContent />
			</Suspense>
		</>
	);
}

async function CVContent() {
	const cv = await client.fetch<CV>(CV_QUERY, {}, options);

	return (
		<div className="flex max-w-6xl flex-col gap-50 pb-28">
			{cv.titleTexts.map((item) => (
				<div key={item.title} className="flex gap-3.5 xl:gap-50">
					<h2 className="min-w-28 xl:min-w-56">{item.title}</h2>
					<PortableText value={item.text} />
				</div>
			))}
		</div>
	);
}
