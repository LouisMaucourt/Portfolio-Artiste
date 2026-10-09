import { defineField, defineType } from 'sanity'
import { imageGalleryType } from '../objects/imageGallery';
import { orderRankField } from '@sanity/orderable-document-list';


export const projectType = defineType({
    name: 'post',
    title: 'Oeuvre',
    type: 'document',
    fields: [
 orderRankField({ type: 'post' }),
        defineField({
            name: 'hero',
            type: 'hero',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            type: 'date',
            title:"Date de réalisation",
            options: {
                dateFormat: 'DD-MM-YYYY',
            }
        }),
        defineField({
            name: 'Taille',
            type: 'string',
        }),

        defineField({
            name: 'material',
            title:"Matériaux",
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'exposition',
            title:"Lieu d'exposition",
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
            media: 'hero.image',
        },
    },
})