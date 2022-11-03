import { User } from 'phosphor-react'
import { defineType } from 'sanity'

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  icon: User,
  fields: [
    {
      title: 'Client Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      title: 'Client Logo',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'Client Website',
      name: 'website',
      type: 'url',
    },
  ],
})
