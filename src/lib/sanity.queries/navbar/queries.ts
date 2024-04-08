import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { NavigationType } from './types'

// Navigation query
export const navbarQuery = groq`
*[_type == "navigation"] {
  "buttonText": navButtonText,
  "redirectTo": navRedirectTo,
}[0]
`
export async function getNavbarData(
  client: SanityClient
): Promise<NavigationType> {
  return await client.fetch(navbarQuery)
}
