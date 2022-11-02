import { List } from 'phosphor-react'
import { defineType } from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: List,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'required',
      options: {
        source: 'title',
        maxLength: 30,
      },
    },
    {
      title: 'Nav Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'navigationSection',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title = 'Untitled', items = [] }) {
      return {
        title,
        subtitle: `${items.length} link(s)`,
        media: List,
      }
    },
  },
})
