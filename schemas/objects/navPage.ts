import { LinkIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export default defineType({
  name: 'navPage',
  title: 'Nav Page',
  type: 'object',
  icon: LinkIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text',
    },
    {
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      pageType: 'page._type',
      pageSlug: 'page.slug.current',
    },
    prepare({ title, pageType, pageSlug }) {
      // const isStatic = getStaticRoute(pageType);
      // const isDynamic = getDynamicRoute(pageType);
      return {
        title: title,
        //   subtitle:
        //     isStatic !== false
        //       ? `/${isStatic}`
        //       : `/${isDynamic ? `${isDynamic}/` : ''}${pageSlug}`,
      }
    },
  },
})
