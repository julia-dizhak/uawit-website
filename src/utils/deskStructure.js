import {DocumentsIcon} from '@sanity/icons'
import {ControlsIcon} from '@sanity/icons'

export const uawitStructure = (S) =>
  S.list()
    .title('UAWiT')
    .items(
      [
        S.listItem()
          .title('Content')
          .icon(DocumentsIcon)
          .child(
            S.list()
              .title("Content")
              .items([
                ...S.documentTypeListItems().filter(
                  (listItem) => !["widget"].includes(listItem.getId())
                ),
              ])
          ),
        S.listItem()
          .title('Configuration')
          .icon(ControlsIcon)
          .child(
            S.list()
              .title("Configuration")
              .items([
                ...S.documentTypeListItems().filter(
                  (listItem) => ["widget"].includes(listItem.getId())
                ),
              ])
          ),
      ]
    )
