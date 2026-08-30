import { defineField, defineType } from 'sanity'
export const heroType = defineType({
    
    name: 'hero',
    type: 'object',
    title: 'Hero',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'hero.heading',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'tagline',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            
        }),
    ],
    
})