/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {
  defineUrlResolver,
  Iframe,
  type IframeOptions,
} from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'

// see https://www.sanity.io/docs/api-versioning for how versioning works
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from '~/lib/sanity.api'
import { schemaTypes } from '~/schemas'
import { uawitStructure } from '~/utils/deskStructure'

const iframeOptions = {
  url: defineUrlResolver({
    base: '/api/draft',
    requiresSlug: ['post'],
  }),
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(['settings'])

export default defineConfig({
  basePath: '/studio',
  name: 'project-name',
  title: 'Project Name',
  projectId,
  dataset,
  // edit schemas in './src/schemas'
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    deskTool({
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        return S.document().views([
          // Default form view
          S.view.form(),
          // Preview
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      },
      structure: uawitStructure,
    }),
    // Add the "Open preview" action
    previewUrl({
      base: '/api/draft',
      requiresSlug: ['post'],
      urlSecretId: previewSecretId,
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
