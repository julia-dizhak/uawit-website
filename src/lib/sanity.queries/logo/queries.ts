import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { LogoType } from './types'

export const logoQuery = groq`
  *[_type == "logo"] {
    logoImage,
    caption,
    href,
  }[0] // Logo Query: always fetch first
`
export async function getLogoData(client: SanityClient): Promise<LogoType> {
  return await client.fetch(logoQuery)
}
