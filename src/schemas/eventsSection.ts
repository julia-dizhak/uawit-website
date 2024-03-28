import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'eventsSection',
  title: 'Sections',
  type: 'document',
  fields: [
    defineField({
      name: 'ctaSubsectionDescription',
      title: 'CTA Subsection Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(300),
      description:
        'Enter a brief description for the call-to-action subsection.Maximum 300 characters.',
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description:
            'Enter the text to display on the call-to-action button.',
        }),
      ],
    }),
    defineField({
      name: 'ctaImageOverlay',
      title: 'CTA Image Overlay Element',
      type: 'image',
      description:
        'Upload an optional image overlay element for the call-to-action subsection.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaBackgroundImage',
      title: 'CTA Background Image',
      type: 'image',
      description:
        'Upload a background image for the call-to-action subsection.',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      description: 'Enter the title for the events section.',
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
        source: 'sectionTitle',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
      description:
        'Enter a description for the events section.Maximum 300 characters.',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'events' }] }],
      description:
        'View all events belonging to this section or create a new one.',
    }),
    defineField({
      name: 'eventsButton',
      title: 'Events Button',
      type: 'object',
      fields: [
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description:
            'Enter the text to display on the Events section button.',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'url',
          validation: (Rule) => Rule.required(),
          description:
            'Enter the URL the Events button redirects to. Temporary field.',
        }),
      ],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Events Section Background Image',
      type: 'image',
      description:
        'Upload an optional overlay image element for the events section.',
      options: {
        hotspot: true,
      },
    }),
  ],
})
