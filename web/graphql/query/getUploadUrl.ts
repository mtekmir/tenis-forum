import gql from 'graphql-tag'

export const getUploadUrlQuery = gql`
  query GetUploadUrlQuery($contentType: String!, $extension: String!) {
    getUploadUrl(input: { contentType: $contentType, extension: $extension }) {
      success
      uploadKey
      uploadUrl
    }
  }
`
