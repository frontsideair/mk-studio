import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://sgrnoblg.api.sanity.io/v1/graphql/production/default',
  documents: 'framework/data/**/*.ts',
  generates: {
    './types/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
