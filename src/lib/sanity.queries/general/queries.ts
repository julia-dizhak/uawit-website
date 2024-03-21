import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { ContactType } from './types'

// Contact Query
export const contactQuery = groq`*[_type == "settings"]{
    "email": email,
    "linkedIn": linkedIn,
    "telephone": telephone
  }[0]`

export async function getContact(client: SanityClient): Promise<ContactType> {
  return await client.fetch(contactQuery)
}
