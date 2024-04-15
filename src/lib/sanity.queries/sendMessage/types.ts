import { ImageAsset } from '@sanity/types'

export interface SendMessageType {
  _type: 'sendMessage'
  _id: string
  _createdAt: string
  // dynamic props
  title: string
  blockImage: ImageAsset
  linkText: string
}
