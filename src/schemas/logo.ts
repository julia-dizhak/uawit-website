export default {
  name: 'logo',
  type: 'document',
  title: 'Logo',
  fields: [
    {
      name: 'logoImage',
      type: 'image',
      title: 'Logo Image for UA WIT',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Alt text for a Logo',
    },
    {
      name: 'href',
      type: 'url',
      title: 'Link',
      description: `Can be a path starting with a '/' or a full Url starting with 'http://' or 'https://'`,
      validation: (Rule: { uri: (arg0: { scheme: string[] }) => any }) =>
        Rule.uri({
          scheme: ['/', 'https'],
        }),
    },
  ],
}
