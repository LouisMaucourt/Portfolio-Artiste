import { Work } from '@/components/Work';
import { client } from '@/sanity/client';
import { WORK_QUERY } from '@/sanity/query';
import { notFound } from 'next/navigation'

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post = await client.fetch(WORK_QUERY, { slug })
    if (!post) return notFound()
    return(
    <>
        <Work data={post} />
        </>
    )
}