import groq from 'groq'
import { SanityClient } from 'next-sanity'
import {
  HeroType,
  LogoType,
  NavigationType,
  PostsType,
  EventType,
} from './sanity.interfaces'

// Posts Query
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current
`

export async function getPost(
  client: SanityClient,
  slug: string
): Promise<PostsType> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export async function getPosts(client: SanityClient): Promise<PostsType> {
  return await client.fetch(postsQuery)
}

// Event Query
export const eventsQuery = groq`*[_type == "events"] {
  "image": image,
  "title": title
}`

export async function getEvents(
  client: SanityClient
  // TODO: slug: string,
): Promise<EventType[]> {
  return await client.fetch(eventsQuery)
}

// Logo Query: always fetch first
export const logoQuery = groq`
  *[_type == "logo"] {
    "logoImage": logoImage,
    "caption": caption,
    "href": href,
  }[0]
`
export async function getLogoData(client: SanityClient): Promise<LogoType> {
  return await client.fetch(logoQuery)
}

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

// Hero block
export const heroQuery = groq`
  *[_type == "hero"] {
    "backgroundImage": backgroundImage,
    "title": title,
    "description": description,
    "buttonName": buttonName {
      "buttonText": buttonText,
      "redirectTo": redirectTo,
    }
  }[0]
`

export async function getHeroData(client: SanityClient): Promise<HeroType> {
  return await client.fetch(heroQuery)
}
