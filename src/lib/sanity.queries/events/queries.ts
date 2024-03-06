import groq from 'groq'
import { type SanityClient } from 'next-sanity'
import { type EventsListType } from './types'

export const eventsQuery = groq`*[_type == "events"] {
  _id,
  _createdAt,
  "eventCard":{
    "name": eventCard.title,
    "image": coalesce(eventCard.image.asset->url, null),
    "title": eventCard.title,
    "slug": eventCard.slug.current,
    "dateAndTime": eventCard.dateAndTime, 
    "location": {
      "address": eventCard.location.address,
      "city": eventCard.location.city,
      "googleMapsUrl": eventCard.location.googleMapsUrl,
    },
    "entranceFee": {
      "type": eventCard.entranceFee.type,
      "priceSek": eventCard.entranceFee.priceSek,
    }
  },
  "eventSectionButton": {
    "buttonLink": eventSectionButton.buttonLink
  }
}
`
export async function getEvents(client: SanityClient): Promise<EventsListType> {
  return await client.fetch(eventsQuery)
}
