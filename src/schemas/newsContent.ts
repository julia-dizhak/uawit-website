import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'Image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'productUpdates',
      title: 'Product Updates',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    }),
    defineField({
      name: 'readMore',
      title: 'Read more',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] })
    })
  ],

  preview: {
    select: {
      title: 'title',
      productUpdatesDate: 'productUpdates.split("-").slice(0, 2).join("/")',
      image: 'Image',
      content: 'content[0..60]',
      readMore: 'readMore'
    },
    prepare(selection) {
      const { productUpdatesDate, content, readMore } = selection;
      return {
        ...selection,
        subtitle: `${productUpdatesDate} - ${content.substring(0, 30)}... ${
          readMore ? 'Read More' : ''
        }`
      };
    }
  }
});
