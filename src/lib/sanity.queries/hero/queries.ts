import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { HeroType } from './types'

// Hero block
export const heroQuery = groq`
  *[_type == "hero"] {
    "backgroundImage": backgroundImage,
    "title": title,
    "description": description,
    "fontColor": fontColor
  }[0]
`

export async function getHeroData(client: SanityClient): Promise<HeroType> {
  return await client.fetch(heroQuery)
}
