import { UnderlineIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'animatedDivider',
  title: 'Animated Divider',
  type: 'object',
  icon: UnderlineIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
  ],
})
