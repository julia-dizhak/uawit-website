import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'posts',
  title: 'Posts',
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'Add text for the post',
    }),
    defineField({
      name: 'extraBody',
      title: 'Extra Body',
      type: 'text',
      description: 'Add additional text for the inner post page',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Select the date for the post',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
