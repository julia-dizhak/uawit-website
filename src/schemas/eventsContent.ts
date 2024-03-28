import { defineField, defineType } from 'sanity'
import { formatDateTime } from '~/lib/sanity.queries/events/utility'

export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // events start
    defineField({
      name: 'image',
      title: 'Event Card Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
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
      validation: (Rule) => Rule.required(),
      type: 'slug',
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
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({
          name: 'address',
          title: 'Address',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'googleMapsUrl',
          title: 'Google Maps URL',
          type: 'url',
          description: 'This could be location URL',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    // events end
    defineField({
      name: 'eventsButton',
      title: 'Events button',
      type: 'object',
      fields: [
        {
          name: 'buttonText',
          type: 'string',
          title: 'Button Text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'buttonLink',
          type: 'url',
          title: 'Redirect To',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
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

      const { formattedDate, formattedTime } = formatDateTime(
        dateAndTime as string
      )

      const subtitle = `${formattedDate} • ${formattedTime} • ${locationCity}, ${locationAddress} `

      return { ...selection, subtitle }
    },
  },
})
