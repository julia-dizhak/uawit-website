import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { EventsListType } from './types'

export const eventsQuery = groq`*[_type == "events"] {
  _id,
  _createdAt,
  sectionTitle,
  sectionDescription,
  "image": coalesce(image.asset->url, null),
  title,
  "slug": slug.current,
  dateAndTime,
  location {
    address,
    city,
    googleMapsUrl
  },
  eventsButton {
    buttonText,
    buttonLink,
  }
}
`
export async function getEvents(client: SanityClient): Promise<EventsListType> {
  return await client.fetch(eventsQuery)
}