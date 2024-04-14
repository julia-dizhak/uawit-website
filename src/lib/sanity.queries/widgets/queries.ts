import groq from 'groq'
import { SanityClient } from 'next-sanity'
import { WidgetType } from './types'

export const widgetQuery = groq`
  *[_type == "widget"] {
    "title": title,
    "description": description,
    "componentType": componentType,
    "logo": Logo.logo->{caption, href, logoImage},
    "Picture": Picture,
  }[0]
`
export async function getWidgetData(client: SanityClient): Promise<WidgetType> {
  return await client.fetch(widgetQuery)
}
