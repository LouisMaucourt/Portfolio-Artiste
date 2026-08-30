import { defineField, defineType } from 'sanity'

export const BioType = defineType({
    name: 'bio',
    type: 'document',
    title: 'Biographie',

    fields: [
        defineField({
            name: 'hero',
            type: 'hero',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'textImage',
            title: 'Texte / Image',
            type: 'textImage',
        }),
    ],

    preview: {
        select: {
            title: 'hero.heading',
            media: 'hero.image',
        },
    },
})