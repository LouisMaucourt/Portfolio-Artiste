import { defineArrayMember, defineField, defineType } from 'sanity'
export const cvType = defineType({
    name: 'cv',
    type: 'document',
    title: 'CV',

    fields: [
        defineField({
            name: 'hero',
            type: 'hero',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'titleTexts',
            title: 'Blocs titre / texte',
            type: 'titleText',
        }),
    ],

    preview: {
        select: {
            title: 'hero.heading',
            media: 'hero.image',
        },
    },
})