import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export const structure = (S, context) =>
    S.list()
        .title('Contenu')
        .items([
            orderableDocumentListDeskItem({
                type: 'post',
                title: 'Œuvres',
                S,
                context,
            }),

            S.divider(),

            S.listItem()
                .title('Biographie')
                .child(
                    S.document()
                        .schemaType('bio')
                        .documentId('bio')
                ),

            S.listItem()
                .title('CV')
                .child(
                    S.document()
                        .schemaType('cv')
                        .documentId('cv')
                ),
        ])