import imageUrlBuilder from '@sanity/image-url'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'

const draftMode = false
const client = getClient(draftMode ? { token: readToken } : undefined)

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
