export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
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
