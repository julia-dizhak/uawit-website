import { defineField, defineType } from 'sanity'

//#TODO - add   validation: (Rule) => Rule.required(),

export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
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
          // validation: (Rule) =>
          //   Rule.required().uri({ scheme: ['http', 'https'] }),
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
  ],

  preview: {
    select: {
      title: 'title',
      media: 'Image',
      date: 'dateAndTime',
      entranceFeeType: 'entranceFee.type',
      entranceFeePrice: 'entranceFee?.priceSek',
      locationCity: 'location.city',
      locationAddress: 'location.address',
    },
    prepare(selection) {
      const {
        title,
        date,
        entranceFeeType,
        entranceFeePrice,
        locationCity,
        locationAddress,
      } = selection
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      const entranceFeeText =
        entranceFeeType === 'Free'
          ? 'Free'
          : entranceFeePrice
            ? `SEK ${entranceFeePrice}`
            : 'Price not available'

      const subtitle = `
     ${formattedDate} - ${title} -${locationCity}-${locationAddress} - ${entranceFeeText} 
                `

      return { ...selection, subtitle }
    },
  },
})
