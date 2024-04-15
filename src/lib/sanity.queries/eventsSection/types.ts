import { PortableTextBlock } from '@portabletext/types'

export interface EventsSectionType {
  _type: 'eventsSection'
  _id: string
  _createdAt?: string
  // dynamic
  eventsTitle: string
  eventsDescription: PortableTextBlock[]
  moreButtonText: string
}
