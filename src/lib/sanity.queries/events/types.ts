import { ImageAsset, Slug } from '@sanity/types'

export interface LocationType {
  address: string
  city: string
  googleMapsUrl?: string
}

export interface EventType {
  _type: 'event'
  _id: string
  title: string
  slug: Slug
  image?: ImageAsset
  dateAndTime: string
  location: LocationType
}

export type EventsListType = EventType[]
