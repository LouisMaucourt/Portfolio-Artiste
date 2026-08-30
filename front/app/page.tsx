import { client } from "./sanity/client";
import { options, Post, WORKS_QUERY } from "./sanity/query";
import { Works } from "./components/Works";


export default async function Home() {
  const works = await client.fetch<Post[]>(WORKS_QUERY, {}, options);
  return (
    <>
      <Works data={works}/>
    </>
  );
}