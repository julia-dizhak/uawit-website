import { defineField, defineType } from 'sanity'
import { formatDateTime } from '~/lib/sanity.queries/events/utility'

export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Event Card Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'dateAndTime',
      title: 'Date and Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'address',
          title: 'Address',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
        }),
        defineField({
          name: 'googleMapsUrl',
          title: 'Google Maps URL',
          type: 'url',
          description: 'This could be location url',
        }),
      ],
    }),

    defineField({
      name: 'entranceFee',
      title: 'Entrance Fee',
      type: 'object',
      initialValue: {
        type: 'Free',
        priceSek: 0,
      },
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: [
              { title: 'Free', value: 'Free' },
              { title: 'Paid', value: 'Paid' },
            ],
          },
        }),
        defineField({
          name: 'priceSek',
          title: 'Price (SEK)',
          type: 'number',
          validation: (Rule) => Rule.min(0),
        }),
      ],
    }),
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
      dateAndTime: 'dateAndTime',
      locationCity: 'location.city',
      locationAddress: 'location.address',
    },
    prepare(selection) {
      const { dateAndTime, locationCity, locationAddress } = selection

      const { formattedDate, formattedTime } = formatDateTime(dateAndTime)

      const subtitle = `${formattedDate} • ${formattedTime} •  ${locationCity}, ${locationAddress} `

      return { ...selection, subtitle }
    },
  },
})
