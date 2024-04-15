import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'eventsSection',
  title: 'Events Section',
  type: 'document',
  fields: [
    defineField({
      name: 'eventsTitle',
      title: 'Events Title',
      description: 'Enter the title for the events section.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventsDescription',
      title: 'Events Description',
      type: 'blockContent',
      description:
        'Enter a description for the events section. Maximum 300 characters.',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'moreButtonText',
      title: 'More Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Enter the text to display on the see more events button',
    }),
  ],
})
