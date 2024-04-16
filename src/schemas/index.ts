import logo from './logo'
import hero from './hero'
import { SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import posts from './posts'
import events from './events/eventCards'
import partners from './partner'
import about from './about'
import widgets from './widget'
import settings from './settings'
import eventsSection from './events/eventsSection'
import sendMessage from './sendMessage'

export const schemaTypes: SchemaTypeDefinition[] = [
  posts,
  blockContent,
  hero,
  logo,
  about,
  partners,
  sendMessage,
  eventsSection,
  events,
  widgets,
  settings,
]
