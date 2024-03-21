import { DocumentsIcon } from '@sanity/icons'
import { ControlsIcon } from '@sanity/icons'

export const uawitStructure = (S) =>
  S.list()
    .title('UAWiT')
    .items([
      S.listItem()
        .title('Content')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Content')
            .items([
              ...S.documentTypeListItems().filter(
                (listItem) => !['settings'].includes(listItem.getId())
              ),
            ])
        ),
      S.listItem()
        .title('Configuration')
        .icon(ControlsIcon)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General Configuration')
                .id('general')
                .child(
                  S.document()
                    .title('General Configuration')
                    .schemaType('settings')
                    .documentId('general')
                ),
            ])
        ),
    ])
