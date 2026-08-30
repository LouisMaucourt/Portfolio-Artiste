import { defineField, defineType } from 'sanity'
import { imageGalleryType } from '../objects/imageGallery';

export const projectType = defineType({
    name: 'post',
    title: 'Oeuvre',
    type: 'document',
    fields: [
        defineField({
            name: 'orderRank',
            type: 'string',
            hidden: true,
        }),

        defineField({
            name: 'hero',
            type: 'hero',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
            }
        }),
        defineField({
            name: 'size',
            type: 'string',
        }),

        defineField({
            name: 'material',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'exposition',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        imageGalleryType
    ],
    preview: {
        select: {
            title: 'hero.heading',
            media: 'hero.img',
        },
    },
})