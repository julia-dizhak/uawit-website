import { ImageAsset } from '@sanity/types'

export interface LogoType {
  _type: 'logo'
  logoImage: ImageAsset
  caption?: string
  href?: string
}
