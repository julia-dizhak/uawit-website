export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'languages',
      type: 'array',
      title: 'Switch Languages Options',
      of: [
        {
          type: 'object',
          name: 'langOptions',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Language',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'key',
              type: 'string',
              title: 'Key (f.ex en)',
              validation: (Rule) =>
                Rule.required()
                  .length(2)
                  .regex(/^[a-z]{2}$/i, 'Must be a two-letter code'),
            },
          ],
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      title: 'Navigation Items Menu',
      of: [
        {
          type: 'object',
          name: 'navigationItem',
          fields: [
            {
              name: 'id',
              type: 'slug',
              title: 'ID',
              options: {
                source: 'title',
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title Item',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'path',
              type: 'string',
              title: 'Path',
            },
          ],
        },
      ],
    },
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
