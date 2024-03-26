import groq from 'groq';
import { SanityClient } from 'next-sanity';
import { EventsSectionType } from './types';


export const eventsSectionQuery = groq`*[_type == "eventsSection"]{
  _id,
  sectionTitle,
  sectionDescription,
  eventsButton,
  backgroundImage
}[0]`;


export async function getEventsSectionData(client: SanityClient): Promise<EventsSectionType> {
  return  await client.fetch(eventsSectionQuery)
}