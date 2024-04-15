import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { SendMessageType } from './types'

export const sendMessageQuery = groq`*[_type == "sendMessage"]{
  _id,
  title,
  blockImage,
  linkText
}[0]`

export async function getSendMessageData(
  client: SanityClient
): Promise<SendMessageType> {
  return await client.fetch(sendMessageQuery)
}
