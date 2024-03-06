import type { ImageAsset } from '@sanity/types'

export interface Partner {
  _type: 'partner'
  partnerLogo: ImageAsset
  partnerName: string
  href?: string
}
