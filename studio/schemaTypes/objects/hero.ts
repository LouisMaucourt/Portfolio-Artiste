import { defineField, defineType } from 'sanity'
export const heroType = defineType({
    name: 'hero',
    type: 'object',
    title: 'En-tête',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Titre',
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            title: 'URL',
            options: {
                source: 'hero.heading',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'publishedAt',
            title:"Publié le",
            type: 'datetime',
            options: {
		dateFormat: 'DD/MM/YYYY',
	},
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'tagline',
            type: 'string',
            title: 'Sous-titre',
        }),

        defineField({
            name: 'image',
            type: 'image',
            title: 'Image principale',
            options: { hotspot: true },
        }),

        defineField({
            name: 'alt',
            type: 'string',
            title: 'Texte alternatif',
        }),
    ],
})