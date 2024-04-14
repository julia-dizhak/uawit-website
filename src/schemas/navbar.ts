export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'navButtonText',
      type: 'string',
      title: 'Button Text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'navRedirectTo',
      type: 'url',
      title: 'Redirect To',
      validation: (Rule) => Rule.required(),
    },
  ],
}
