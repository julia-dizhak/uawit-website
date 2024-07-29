import { PortableTextBlock } from '@portabletext/types'
import { ImageAsset } from '@sanity/types'

export interface PostsSectionType {
  _type: 'postsSection'
  _id: string
  _createdAt: string

  // dynamic fields
  postsTitle: string
  postsImage: ImageAsset
  postsDescription: PortableTextBlock[]
  moreButtonText: string
}
