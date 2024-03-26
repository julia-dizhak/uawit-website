import { defineField, defineType } from 'sanity'
import formatDateTime from '~/utils/index'

export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'section',
      title: 'Section',
      type: 'reference',
      description: 'Select the section to which this event belongs.',
      to: [{ type: 'eventsSection' }],
      validation: (Rule) => Rule.required(),
    },
    defineField({
      name: 'image',
      title: 'Event Card Image',
      description: 'Upload an image representing the event.',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Enter the title of the event.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      description:
        'A unique identifier for the event. It will be used in the URL.',
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
      description: 'Select the date and time of the event.',
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
      description:
        'Enter the address and city where the event will take place.',
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
          description: 'Provide a Google Maps URL for the event location.',
          validation: (Rule) => Rule.required(),
        }),
      ],
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
        dateAndTime as string,
      )

      const subtitle = `${formattedDate} • ${formattedTime} • ${locationCity}, ${locationAddress} `

      return { ...selection, subtitle }
    },
  },
})
