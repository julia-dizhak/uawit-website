import type { ImageAsset, Slug } from '@sanity/types'

export interface EventType {
  _type: 'event'
  _id: string
  title?: string
  slug: Slug
  image?: ImageAsset
}

export type EventsListType = EventType[]
