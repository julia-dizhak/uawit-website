import type { ImageAsset, Slug } from '@sanity/types'
import type { PortableTextBlock } from '@portabletext/types'

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface NavigationI {
  logo: ImageAsset
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


export interface HeroI {
  backgroundImage: ImageAsset;
  title: string;
  description: string;
  buttonName: {
    buttonText: string;
    redirectTo: string;
  };
}
