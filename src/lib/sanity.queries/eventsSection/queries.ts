import groq from 'groq';
import { SanityClient } from 'next-sanity';
import { SectionType } from './types';


const sectionQuery = groq`*[_type == "section"]{
  _id,
  sectionTitle,
  sectionDescription,
  eventsButton,
  backgroundImage
}[0]`;


export async function getSection(client: SanityClient): Promise<SectionType | null> {
  try {
    const sectionData = await client.fetch(sectionQuery);
    return sectionData;
  } catch (error) {
    console.error('Error fetching section data:', error.message);
    return null;
  }
}
