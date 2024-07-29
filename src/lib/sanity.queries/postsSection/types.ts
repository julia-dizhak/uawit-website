import { PortableTextBlock } from '@portabletext/types'

export interface PostsSectionType {
  _type: 'postsSection'
  _id: string
  _createdAt?: string
  // dynamic fields
  postsTitle: string
  postsDescription: PortableTextBlock[]
  moreButtonText: string
}
