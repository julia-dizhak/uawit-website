import { ImageAsset } from '@sanity/types'

export interface HeroType {
  backgroundImage: ImageAsset
  title: string
  description: string
  fontColor: string
}
