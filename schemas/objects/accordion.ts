import { ArrowRightIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'accordion',
  title: 'Accordion',
  type: 'object',
  icon: ArrowRightIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'simplePortableText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
