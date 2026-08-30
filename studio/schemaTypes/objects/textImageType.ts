import { defineField, defineType } from 'sanity'
export const textImageType = defineType({
    name: 'textImage',
    type: 'object',
    title: 'Texte et image',
    
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Description image',
                }),
            ],
        }),
    ],
});