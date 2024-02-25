import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
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
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
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
export type EventsListType = EventType[];



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
