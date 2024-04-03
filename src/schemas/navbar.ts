export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'buttonName',
      title: 'Button Name',
      type: 'object',
      fields: [
        {
          name: 'buttonText',
          type: 'string',
          title: 'Button Text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'redirectTo',
          type: 'url',
          title: 'Redirect To',
          validation: (Rule) =>
            Rule.required().uri({ scheme: ['http', 'https'] }),
        },
      ],
    },
  ],
}
