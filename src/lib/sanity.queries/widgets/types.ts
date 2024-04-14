import { ImageAsset } from '@sanity/types'
import { LogoType } from '../logo/types'

export interface ImageType {
  title: string,
  image: ImageAsset
}

export interface WidgetType {
  _type: 'widget'
  title: string,
  description: string,
  componentType: string,
  logo?: LogoType,
  Picture?: ImageType
}
