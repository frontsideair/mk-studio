import { ArrowRightIcon } from '@sanity/icons'
import { defineType } from 'sanity'
export default defineType({
  name: 'navigationSection',
  title: 'Navigation Section',
  type: 'object',
  icon: ArrowRightIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'target',
      type: 'reference',
      title: 'Target',
      to: [
        {
          type: 'page',
        },
      ],
    },
    {
      type: 'array',
      name: 'links',
      title: 'Links',
      of: [
        {
          type: 'navLink',
        },
      ],
    },
  ],
})
