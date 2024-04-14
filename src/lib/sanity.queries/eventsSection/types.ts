import { ImageAsset, Slug } from '@sanity/types'

export interface EventsButtonType {
  buttonText: string
  buttonLink: string
}

export interface CTAButtonType {
  buttonText: string
}

export interface EventsSectionType {
  _type: 'eventsSection'
  _id: string
  sectionTitle: string
  slug: Slug
  sectionDescription: string
  eventsButton: EventsButtonType
  backgroundImage: ImageAsset
  ctaSubsectionDescription: string
  ctaButton: CTAButtonType
  ctaBackgroundImage: ImageAsset
}
