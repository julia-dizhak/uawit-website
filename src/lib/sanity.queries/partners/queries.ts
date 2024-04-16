import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { Partner } from './types'

export const partnersQuery = groq`
  *[_type == "partners"] {
  partnerLogo,
     partnerName,
    href,
  }
`
export async function getPartnersData(
  client: SanityClient
): Promise<Partner[]> {
  return await client.fetch(partnersQuery)
}
