import { ImageAsset, Slug } from '@sanity/types'

export interface LocationType {
  address?: string
  city?: string
  googleMapsUrl?: string
}

export interface EntranceFeeType {
  type?: string
  priceSek?: number
}

export interface EventType {
  [x: string]: any
  _type: 'event'
  _id: string
  title?: string
  slug: Slug
  image?: ImageAsset
  dateAndTime?: string
  location?: LocationType
  entranceFee?: EntranceFeeType
  buttonLink?: string
}

export type EventsListType = EventType[]
