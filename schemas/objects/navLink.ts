import { ArrowRightIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'navLink',
  title: 'Navigation Link',
  type: 'object',
  icon: ArrowRightIcon,
  fields: [
    {
      type: 'reference',
      name: 'target',
      title: 'Target page',
      to: [{ type: 'page' }],
      description: 'No target article turns the item into a subheading.',
      // _weak: true // enable if you don't want reference integrity checks
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Override title from the target page.',
    },
    {
      type: 'array',
      name: 'children',
      title: 'Children',
      of: [{ type: 'navLink' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare({ title, url }) {
      return {
        title: title ?? url,
        subtitle: title && url,
      }
    },
  },
})
