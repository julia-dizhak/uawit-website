import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { PostType, PostsType } from './types'

// Posts Query
export const postsQuery = groq`*[_type == "posts" && defined(slug.current)] | order(_createdAt desc)`

export const postBySlugQuery = groq`*[_type == "posts" && slug.current == $slug][0]`

export const postSlugsQuery = groq`*[_type == "posts" && defined(slug.current)][].slug.current
`

export async function getPost(
  client: SanityClient,
  slug: string
): Promise<PostType> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export async function getPosts(client: SanityClient): Promise<PostsType> {
  return await client.fetch(postsQuery)
}
