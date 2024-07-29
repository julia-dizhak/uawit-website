import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { PostsSectionType } from './types'

export const postsSectionQuery = groq`*[_type == "postsSection"]{
  _id,
  postsTitle,
  postsImage,
  postsDescription,
  moreButtonText
}[0]`

export async function getPostsSectionData(
  client: SanityClient
): Promise<PostsSectionType> {
  return await client.fetch(postsSectionQuery)
}
