import groq from 'groq'
import { SanityClient } from 'next-sanity'
import {
  HeroType,
  LogoType,
  NavigationType,
  PostsType,
} from './sanity.interfaces'

// Posts Query
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export async function getPosts(client: SanityClient): Promise<PostsType> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

//#TODO : type - schema type
//Event: events - create a query,  export events;
export const eventsQuery = groq`*[_type == "events"] {
  "image": image,
  "title": title
}`

//-step2: get events data

export async function getEvents(
  client: SanityClient,
  // slug: string,
): Promise<EventType[]> {
  return await client.fetch(eventsQuery, {})
}

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<PostsType> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

// Logo Query
export const logoQuery = groq`
  *[_type == "logo"] {
    "logoImage": logoImage,
    "caption": caption,
    "href": href,
  }
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
}
`
export async function getNavbarData(
  client: SanityClient,
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
  }
`

export async function getHeroData(client: SanityClient): Promise<HeroType> {
  return await client.fetch(heroQuery)
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

//Step 3 - create an Interface: - Sanity types for fields!

export interface EventType {
  _type: 'event'
  _id: string
  title?: string
  slug: Slug
  image?: ImageAsset
}

//#TODO - for the eventlist type.  List, [] - type!;
export type EventsListType = EventType[]

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}
