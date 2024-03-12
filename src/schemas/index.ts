import logo from './logo'

import navbar from './navbar'
import hero from './hero'
import { SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import post from './post'
import eventsContent from './eventsContent'
import newsContent from './newsContent'
import partners from './partner'
import about from './about'
import widgets from './widget'

export const schemaTypes: SchemaTypeDefinition[] = [
  post,
  blockContent,
  eventsContent,
  newsContent,
  navbar,
  hero,
  logo,
  partners,
  about,
  widgets,
]
