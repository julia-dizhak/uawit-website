import groq from 'groq'
import { type SanityClient } from 'next-sanity'
import { type EventsListType } from './types'

export const eventsQuery = groq`*[_type == "events"] {
   _id,
   _createdAt,
   name,
  "image": coalesce(image.asset->url, null),
  "title": title,
  "slug": slug.current,
  "date": dateAndTime->date | date('yyyy-MM-dd'),
  "time": dateAndTime->time | time('HH:mm'),
  "location": {
      "address": location.address,
      "city": location.city,
      "googleMapsUrl": location.googleMapsUrl,
  },
  "entranceFee": {
      "type": entranceFee.type,
      "priceSek": entranceFee.priceSek,
  },
  "buttonLink": buttonLink,
}
`
export async function getEvents(client: SanityClient): Promise<EventsListType> {
  return await client.fetch(eventsQuery)
}
