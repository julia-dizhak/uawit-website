import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sendMessage',
  title: 'Send Message Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(300),
      description:
        'Enter a title for the send message block. Maximum 300 characters.',
    }),
    defineField({
      name: 'blockImage',
      title: 'Block image',
      type: 'image',
      description:
        'Upload a background image for the call-to-action subsection.',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'text',
      description: 'Enter the text to display on email send link',
    }),
  ],
})
