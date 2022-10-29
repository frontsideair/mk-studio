import { ArrowDownIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'accordions',
  title: 'Accordion List',
  type: 'object',
  icon: ArrowDownIcon,
  fields: [
    {
      title: 'Accordions',
      name: 'items',
      type: 'array',
      of: [{ type: 'accordion' }],
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({ items }) {
      return {
        title: 'Accordion List',
        subtitle: `${items.length} items(s)`,
      }
    },
  },
})
