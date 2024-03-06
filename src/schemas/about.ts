import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'blockContent',
    }),
    defineField({
      name: 'longDescription',
      title: 'Long description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',

      media: 'mainImage',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})
