import { Works } from "../components/Works";
import { client } from "../sanity/client";
import { options, Post, WORKS_QUERY } from "../sanity/query";

export default async function Page() {
    const works = await client.fetch<Post[]>(WORKS_QUERY, {}, options);
    return (
        <>
            <Works data={works} />
        </>
    );
} 