import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { NavigationType } from './types'

// Navigation
export const navbarQuery = groq`
*[_type == "navigation"] {
  "items": items[] {
    "id": id.current,
    "title": title,
    "path": path,
  },
  "languages": languages[] {
    "name": name,
    "key": key
  },
  "buttonName": buttonName {
    "buttonText": buttonText,
    "redirectTo": redirectTo,
  }
}[0]
`
export async function getNavbarData(
  client: SanityClient
): Promise<NavigationType> {
  return await client.fetch(navbarQuery)
}
