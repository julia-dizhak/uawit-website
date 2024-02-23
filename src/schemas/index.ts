import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import navbar from './navbar'
import hero from './hero'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, navbar, hero, blockContent],
}
 