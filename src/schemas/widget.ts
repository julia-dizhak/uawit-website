import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'widget',
  title: 'Widget',
  type: 'document',
  groups: [
    {
      name: 'settings',
      title: 'Settings',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'component',
      title: 'Component',
      type: 'string',
      options: {
        list: [
          { title: 'Button', value: 'Button' },
          { title: 'Logo', value: 'Logo' },
        ],
      },
    }),
    defineField({
      name: 'Button',
      title: 'Button',
      type: 'object',
      group: 'settings',
      hidden: ({ parent, value }) => parent?.component !== 'Button',
      fields: [
        defineField({
          name: 'buttonText',
          type: 'string',
          title: 'Button Text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'redirectTo',
          type: 'url',
          title: 'Redirect To',
        }),
      ],
    }),
    defineField({
      name: 'Logo',
      title: 'Logo',
      type: 'object',
      group: 'settings',
      hidden: ({ parent, value }) => parent?.component !== 'Logo',
      fields: [
        defineField({
          name: 'logo',
          type: 'reference',
          title: 'Logo',
          description: 'Select one of the existing logos or add new.',
          to: [{ type: 'logo' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
