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
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contacts',
    }),
    defineField({
      name: 'telephone',
      title: 'Telephone',
      type: 'string',
      group: 'contacts',
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'string',
      group: 'contacts',
    }),
    defineField({
      name: 'logo',
      type: 'reference',
      title: 'Logo',
      description: 'Select one of the existing logos or add new.',
      to: [{ type: 'logo' }],
    }),
  ],
})
