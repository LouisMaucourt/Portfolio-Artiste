import { SubLabel } from "@/components/ui/SubLabel";
import { client } from "../sanity/client";
import { Bio, BIO_QUERY, options } from "../sanity/query";
import { PortableText } from "next-sanity";
import Image from 'next/image';
import { urlFor } from '../sanity/sanityImgUrl';

export default async function Page() {
    const bio = await client.fetch<Bio>(BIO_QUERY, {}, options);
    const data = bio.textImage;

    console.log(bio)
    return (
        <div className="flex flex-col-reverse gap-12 xl:flex-row lg:items-start">
            <div className="flex-1">
                <SubLabel>{bio.title}</SubLabel>
                <PortableText value={data.description} />
            </div>

            {data.image && (
                <div className="flex-1">
                    <Image
                        src={urlFor(data.image).url()}
                        alt={data.image.alt ?? ""}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        loading="eager"
                    />
                </div>
            )}
        </div>
    );
}