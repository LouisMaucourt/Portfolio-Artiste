import { SubLabel } from "@/components/ui/SubLabel";
import { client } from "../sanity/client";
import { CV, CV_QUERY, options } from "../sanity/query";

export default async function Page() {
    const cv = await client.fetch<CV>(CV_QUERY, {}, options);
    console.log(cv)
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-44 gap-10">
            {cv.titleTexts.map((item) => (
                <div key={item.title}>
                    <SubLabel>{item.title}</SubLabel>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
}   