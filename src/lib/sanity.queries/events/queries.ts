import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { EventsListType } from './types'

// Event Query
export const eventsQuery = groq`*[_type == "events"] {
    "image": image,
    "title": title
  }`

export async function getEvents(
  client: SanityClient
  // TODO: slug: string,
): Promise<EventsListType> {
  return await client.fetch(eventsQuery)
}
