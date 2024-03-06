export default {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    {
      name: 'partnerLogo',
      type: 'image',
      title: 'Partner Logo',
      description:
        'Upload here partners or sponsors logo or image. Avoid format svg, it might not working',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'partnerName',
      type: 'string',
      title: 'Partner Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'href',
      type: 'url',
      title: 'Redirect to partner',
      description: 'A link for partner resource',
    },
  ],
}
