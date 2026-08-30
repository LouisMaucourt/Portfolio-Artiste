// import { defineArrayMember, defineField, defineType } from 'sanity'

// export const pageType = defineType({
//     name: 'page',
//     type: 'document',
//     title: 'Pages',

//     fields: [
//         defineField({
//             name: 'hero',
//             type: 'hero',
//             validation: (Rule) => Rule.required(),
//         }),

//         defineField({
//             name: 'pageBuilder',
//             type: 'array',
//             title: 'Page builder',

//             of: [
//                 defineArrayMember({
//                     name: 'textImage',
//                     title: 'Texte et image',
//                     type: 'textImage',
//                 }),

//                 defineArrayMember({
//                     name: 'gallery',
//                     title: 'Galerie',
//                     type: 'gallery',
//                 }),

//                 defineArrayMember({
//                     name: 'video',
//                     title: 'Vidéo',
//                     type: 'video',
//                 }),

//                 defineArrayMember({
//                     name: 'titleText',
//                     title: 'Titre et texte',
//                     type: 'titleText',
//                 }),
//             ],
//         }),
//     ],

//     preview: {
//         select: {
//             title: 'hero.heading',
//             media: 'hero.image',
//         },
//     },
// })