import type { ImageAsset, Slug } from '@sanity/types'
import type { PortableTextBlock } from '@portabletext/types'

export interface PostType {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export type PostsType = PostType[]
