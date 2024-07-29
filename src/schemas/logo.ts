export default {
  name: 'logo',
  type: 'document',
  title: 'Logo',
  fields: [
    {
      name: 'logoImage',
      type: 'image',
      title: 'Logo UA WIT',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Alt text for Logo',
    },
    {
      name: 'href',
      type: 'url',
      title: 'Link',
      description: `Can be a path starting with a '/' or a full Url starting with 'http://' or 'https://'`
    },
  ],
}
