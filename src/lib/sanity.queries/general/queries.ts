import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { ContactsType } from './types'

// Contact Query
export const contactsQuery = groq`*[_type == "settings"]{
    "email": email,
    "linkedIn": linkedIn,
    "telephone": telephone
  }[0]`

export async function getContacts(client: SanityClient): Promise<ContactsType> {
  return await client.fetch(contactsQuery)
}
