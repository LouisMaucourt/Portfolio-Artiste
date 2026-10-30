import { client } from "./sanity/client";
import { options, type Post, WORKS_QUERY } from "./sanity/query";
import { Works } from "./components/Works";
import Preloader from "./components/Preloader";
import { Suspense } from "react";

export default async function Home() {
	const works = await client.fetch<Post[]>(WORKS_QUERY, {}, options);
	return (
		<>
			<Preloader />
			<Suspense fallback={<p>Chargement...</p>}>
				<Works data={works} />
			</Suspense>
		</>
	);
}
