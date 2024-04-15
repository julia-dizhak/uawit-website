import logo from './logo'
import navbar from './navbar'
import hero from './hero'
import { SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import post from './post'
import events from './events/eventCards'
import partners from './partner'
import about from './about'
import widgets from './widget'
import settings from './settings'
import eventsSection from './events/eventsSection'
import sendMessage from './sendMessage'

export const schemaTypes: SchemaTypeDefinition[] = [
  post,
  blockContent,
  navbar,
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
