import logo from './logo'
import hero from './hero'
import { SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import partners from './partners'
import about from './about'
import widgets from './widget'
import settings from './settings'
import eventsSection from './events/eventsSection'
import events from './events/eventCards'
import sendMessage from './sendMessage'
import posts from './posts/posts'
import postsSection from './posts/postsSection'

export const schemaTypes: SchemaTypeDefinition[] = [
  blockContent,
  hero,
  logo,
  about,
  partners,
  postsSection,
  posts,
  sendMessage,
  eventsSection,
  events,
  widgets,
  settings,
]
