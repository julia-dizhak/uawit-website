import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { AboutType } from './types'

// About Query
export const aboutQuery = groq`*[_type == "about" && defined(slug.current)] | order(_createdAt desc)[0]`

export async function getAbout(client: SanityClient): Promise<AboutType> {
  return await client.fetch(aboutQuery)
}
