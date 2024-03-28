import groq from 'groq';
import { SanityClient } from 'next-sanity';
import { EventsSectionType } from './types';


export const eventsSectionQuery = groq`*[_type == "eventsSection"]{
  _id,
  sectionTitle,
  "slug": slug.current,
  sectionDescription,
  ctaSubsectionDescription,
  events-> {
    _id
  },
  ctaButton,
  'ctaImageOverlay': coalesce(ctaImageOverlay.asset->url, null),
  'ctaBackgroundImage': coalesce(ctaBackgroundImage.asset->url, null),
   eventsButton,
  'backgroundImage': coalesce(backgroundImage.asset->url, null)
}[0]`;


export async function getEventsSectionData(client: SanityClient): Promise<EventsSectionType> {
  return  await client.fetch(eventsSectionQuery)
}

