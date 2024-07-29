import { ImageAsset, Slug } from '@sanity/types'
import { PortableTextBlock } from '@portabletext/types'

export interface PostType {
  _type?: 'post'
  _id?: string
  title?: string
  slug: Slug
  extraBody?: string
  mainImage?: ImageAsset
  body?: PortableTextBlock[]
  _createdAt: string
  date?: string
}

export type PostsType = PostType[]
