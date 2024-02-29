import type { ImageAsset } from '@sanity/types'

export interface HeroType {
  backgroundImage: ImageAsset
  title: string
  description: string
  buttonName: {
    buttonText: string
    redirectTo: string
  }
}
