import type { ImageAsset, Slug } from '@sanity/types'
import type { PortableTextBlock } from '@portabletext/types'

export type PostType = {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export type PostsType = PostType[];

export type LogoType = {
  _type: 'logo'
  logoImage: ImageAsset
  caption?: string
  href?: string
}

export type NavigationType = {
  items: NavigationItem[]
  languages: Language[]
  buttonName: ButtonName
}

interface NavigationItem {
  id: string
  title: string
  path: string
}

interface Language {
  name: string
  key: string
}

interface ButtonName {
  buttonText: string
  redirectTo: string
}


export interface HeroType {
  backgroundImage: ImageAsset;
  title: string;
  description: string;
  buttonName: {
    buttonText: string;
    redirectTo: string;
  };
}
