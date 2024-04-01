import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
          }
        }
    }
  ],
  documents: ['graphql/{queries,fragments}/*{gql,ts,tsx}'],
  generates: {
    './graphql/generate/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false
      }
    }
  },
  verbose: true
}

export default config
