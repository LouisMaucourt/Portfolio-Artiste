import { defineField, defineType } from 'sanity'
export const imageGalleryType = defineType({
    name: 'gallery',
    type: 'object',
    title: 'Gallery',
    fields: [
        {
            name: 'images',
            type: 'array',
            of: [
                defineField({
                    name: 'image',
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: "Description de l'image courte",
                        },
                                             {
                            name: 'credit',
                            type: 'string',
                            title: "Crédit de l'image",
                        },
                    ],
                    
                }),
            ],
            options: {
                layout: 'grid',
            },
        },
    ],
})