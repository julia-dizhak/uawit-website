import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'widget',
  title: 'Widget',
  type: 'document',
  groups: [
    {
      name: 'settings',
      title: 'Settings'
    }
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
      name: 'componentType',
      title: 'Component',
      type: 'string',
      options: {
        list: [
          { title: 'Button', value: 'Button' },
          { title: 'Logo', value: 'Logo' },
          { title: 'Image', value: 'Image' },
        ],
      }
    }),
    defineField({
      name: 'Logo',
      title: 'Logo',
      type: 'object',
      group: 'settings',
      hidden: ({ parent, value }) => parent?.componentType !== 'Logo',
      fields: [
        defineField({
          name: 'logo',
          type: 'reference',
          title: 'Logo',
          description: 'Select one of the existing logos or add new.',
          to: [{type: 'logo'}],
        }),
      ]
    }),
    defineField({
      name: 'Picture',
      title: 'Image',
      type: 'object',
      group: 'settings',
      hidden: ({ parent, value }) => parent?.componentType !== 'Image',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Image Text'
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Choose image',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
});