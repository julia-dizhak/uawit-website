import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { PostsType } from './types'

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
