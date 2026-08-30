import { Post } from '../sanity/query';
import { PortableText } from 'next-sanity';
import { urlFor } from '../sanity/sanityImgUrl';
import Image from 'next/image';
import { ViewTransition } from 'react'
import { SubLabel } from '@/components/ui/SubLabel';

export const Work = ({ data }: { data: Post }) => {
    return (
        <div>
            {data.image && (
                <ViewTransition name={`work-${data._id}`} share="morph" default="none">
                    <Image
                        src={urlFor(data.image).url()}
                        alt={data.title ?? ''}
                        width={1920}
                        height={1080}
                        priority
                        className="w-full"
                    />
                </ViewTransition>
            )}
            <div className="flex flex-col md:gap-10 gap-12">
                <div className="my-10 py-20">
                    <h1 className="text-4xl uppercase font-medium mb-14">{data.title}</h1>
                <div className="flex flex-col lg:gap-15 gap-10">
                <div>
                    <SubLabel>Description</SubLabel>
                    <PortableText value={data.description} />
                </div>
                        <div className="grid grid-cols-2 lg:gap-15 gap-10">
                    {data.date && (
                        <div className="flex flex-col">
                            <SubLabel>Date</SubLabel>
                            <p>{data.date}</p>
                        </div>
                    )}
                    {data.size && (
                        <div className="flex flex-col">
                            <SubLabel>Taille</SubLabel>
                            <p>{data.size}</p>
                        </div>
                    )}
                    {data.material && (
                        <div className="flex flex-col">
                            <SubLabel className="uppercase text-xs">Matériaux</SubLabel>
                            <PortableText value={data.material} />

                        </div>
                            )}
                        
                    {data.exposition && (
                        <div className="flex flex-col">
                                    <SubLabel>Lieux d'exposition</SubLabel>
                            <PortableText value={data.exposition} />

                        </div>
                    )}
                        </div>
                    </div>
                </div>
                {data.gallery?.images && (
                    <div className="flex flex-col gap-4">
                        {data.gallery.images.map((g, index) => (
                            <div key={g._key ?? index} className="">
                                <Image
                                    src={urlFor(g).url()}
                                    alt={g.alt ?? ''}
                                    width={1920}
                                    height={1080}
                                    className=""
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}