import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { ContactsType } from './types'

// Contact Query
export const contactsQuery = groq`*[_type == "settings"]{
    _id,
    email,
    phone,
    linkedIn {
      link,
      buttonText
    }
  }[0]`

export async function getContacts(client: SanityClient): Promise<ContactsType> {
  return await client.fetch(contactsQuery)
}
