import type { PortableTextBlock } from "next-sanity";

export const options = {
  next: { revalidate: 0 },
};

export type SanityImage = {
  _type: "image";
  alt?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type TitleText = {
  title: string;
  text: string;
};

export type TextImage = {
  title: string;
  description: PortableTextBlock[];
  image: SanityImage;
};

export type Post = {
  _id: string;
  title: string;
  slug: string;
  image: SanityImage;
  _createdAt: string;
  date: string;
  size: string;
  material: PortableTextBlock[];
  exposition: PortableTextBlock[];
  description: PortableTextBlock[];
  gallery: SanityImage[];
};

export type CV = {
  _id: string;
  title: string;
  slug: string;
  image: SanityImage;
  titleTexts: TitleText[];
};

export type Bio = {
  _id: string;
  title: string;
  slug: string;
  image: SanityImage;
  textImage: TextImage;
};

export const WORKS_QUERY = `*[
    _type == "post"
] | order(orderRank asc){
    _id,
    "title": hero.heading,
    "slug": hero.slug.current,
    "image": hero.image,
}`;

export const WORK_QUERY = `*[
    _type == "post" &&
    hero.slug.current == $slug
][0]{
    _id,
    "title": hero.heading,
    "slug": hero.slug.current,
    "image": hero.image,
    _createdAt,
    date,
    size,
    material,
    exposition,
    description,
    gallery,
}`;

export const CV_QUERY = `*[_type == "cv"][0]{
    _id,
    "title": hero.heading,
    "slug": hero.slug.current,
    "image": hero.image,
    "titleTexts": titleTexts.items[]{
        title,
        text
    }
}`;
export const BIO_QUERY = `*[_type == "bio"][0]{
    _id,
    "title": hero.heading,
    "slug": hero.slug.current,
    "image": hero.image,
    textImage{
        title,
        description,
        image{
            asset,
            alt
        }
    }
}`;