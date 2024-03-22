import { ImageAsset, Slug } from '@sanity/types'

export interface LocationType {
  address: string
  city: string
  googleMapsUrl?: string
}

export interface EventType {
  _type: 'event'
  _id: string
  sectionTitle: string
  sectionDescription: string
  title: string
  slug: Slug
  image?: ImageAsset
  dateAndTime: string
  location: LocationType
  eventsButton?: {
    buttonText: string
    buttonLink: string
  }
}

export type EventsListType = EventType[]
