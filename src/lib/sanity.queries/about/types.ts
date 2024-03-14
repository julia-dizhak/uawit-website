import { PortableTextBlock } from '@portabletext/types'
import { ImageAsset, Slug } from '@sanity/types'

export interface AboutType {
  _type: 'about'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  mainImage?: ImageAsset
  shortDescription: PortableTextBlock[]
  longDescription: PortableTextBlock[]
}
