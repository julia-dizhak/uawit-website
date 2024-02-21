import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { HeroI, NavigationI, Post } from './interfaces'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export const navbarQuery = groq`
*[_type == "navigation"] {
  "logo": logo,
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
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export async function getNavbarData(
  client: SanityClient,
): Promise<NavigationI> {
  return await client.fetch(navbarQuery)
}

export async function getHeroData(
  client: SanityClient,
): Promise<HeroI> {
  return await client.fetch(heroQuery)
}

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}
