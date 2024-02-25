import { SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import post from './post'
import eventsContent from './eventsContent'
import newsContent from './newsContent'

export const schemaTypes = [post, blockContent, eventsContent, newsContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, eventsContent,newsContent ],
}
