import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'postsSection',
  title: 'Posts Section',
  type: 'document',
  fields: [
    defineField({
      name: 'postsTitle',
      title: 'Posts Title',
      description: 'Enter the title for the posts section.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'postsDescription',
      title: 'Posts Description',
      type: 'blockContent',
      description:
        'Enter a description for the posts section. Maximum 300 characters.',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'moreButtonText',
      title: 'More Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Enter the text to display on the see more posts button',
    }),
  ],
})
