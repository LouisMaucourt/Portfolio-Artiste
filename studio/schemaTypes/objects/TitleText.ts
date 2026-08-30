    import { defineArrayMember, defineField, defineType } from 'sanity'

export const titleText = defineType({
    name: 'titleText',
    type: 'object',

    fields: [
        defineField({
            name: 'items',
            title: ' ',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Titre',
                            type: 'string',
                        }),
                        defineField({
                            name: 'text',
                            title: 'Texte',
                            type: 'text',
                        }),
                    ],
                }),
            ],
        }),
    ],

    preview: {
        select: {
            title: 'items.0.title',
        },
    },
})