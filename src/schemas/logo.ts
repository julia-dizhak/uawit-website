export default {
  name: 'logo',
  type: 'document',
  title: 'Logo',
  fields: [
    {
      name: 'logoImage',
      type: 'image',
      title: 'Logo Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'alt text',
    },
    {
      name: 'href',
      type: 'url',
      title: 'Link',
      description: `Can be a path starting with a '/' or a full Url starting with 'http://' or 'https://'`,
      validation: (Rule) =>
        Rule.uri({
          scheme: ['/', 'https'],
        }),
    },
  ],
}
