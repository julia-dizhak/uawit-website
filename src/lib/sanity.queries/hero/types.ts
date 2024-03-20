import { ImageAsset } from '@sanity/types'
import { LogoType } from '../logo/types'
import { NavigationType } from '../navbar/types'

export interface HeroType {
  backgroundImage: ImageAsset
  title: string
  description: string
  fontColor: string
  navbar: NavigationType
  logo: LogoType
}
