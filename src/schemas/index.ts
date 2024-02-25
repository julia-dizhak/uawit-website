import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import logo from './logo'
import post from './post'
import navbar from './navbar'
import hero from './hero'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    logo,
    post,
    navbar,
    hero,
    blockContent
  ],
}
 