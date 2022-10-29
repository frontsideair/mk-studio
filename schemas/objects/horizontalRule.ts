import HR from '@components/HR'
import { UnderlineIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'horizontalRule',
  title: 'Horizontal Rule',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'horizontalRule',
      components: {
        input: HR,
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Horizontal Rule',
      }
    },
  },
})
