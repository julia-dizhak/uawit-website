import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'General',
    },
    {
      name: 'contacts',
      title: 'Contacts',
    },
  ],
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contacts',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      group: 'contacts',
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'object',
      group: 'contacts',
      description: 'Enter the linkedIn url and text for button',
      fields: [
        {
          name: 'link',
          title: 'Link',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'buttonText',
          title: 'LinkedIn Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'logo',
      type: 'reference',
      title: 'Logo',
      description: 'Select one of the existing logos or add new.',
      to: [{ type: 'logo' }],
    },
  ],
})
