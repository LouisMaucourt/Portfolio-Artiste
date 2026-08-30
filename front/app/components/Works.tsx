import { Post } from '../sanity/query';
import Link from 'next/link';
import { urlFor } from '../sanity/sanityImgUrl';
import Image from 'next/image';
import { ViewTransition } from 'react'
import { SubLabel } from './ui/SubLabel';

export const Works = ({ data }: { data: Post[] }) => {
    return (
        <div className="flex flex-col gap-10 xl:gap-40">
            {data.map((post) => (
                <li key={post.slug}>
                    <Link
                        href={`/works/${post.slug}`}
                        className="group block"
                    >
                        <ViewTransition
                            name={`work-${post._id}`}
                            share="morph"
                            default="none"
                        >
                            <div className="relative">
                                <Image
                                    src={urlFor(post.image).url()}
                                    alt={post.title ?? ''}
                                    width={1920}
                                    height={1080}
                                    priority
                                    className="transition-[filter] duration-300 xl:group-hover:invert"
                                />
                                <h2 className="xl:block hidden mt-3 text-xl uppercase font-semibold xl:absolute xl:inset-0 xl:z-10 xl:m-0 xl:flex xl:items-center xl:justify-center xl:text-5xl xl:opacity-0 xl:transition-opacity xl:duration-300 xl:group-hover:opacity-100">
                                    {post.title}
                                </h2>
                                <SubLabel className="xl:hidden block mt-3">{post.title}</SubLabel>
                            </div>
                        </ViewTransition>
                    </Link>
                </li>
            ))}
        </div>
    )
}