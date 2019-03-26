import gql from 'graphql-tag';

export const getUploadUrlQuery = gql`
  query GetUploadUrlQuery($contentType: String!, $extention: String!) {
    getUploadUrl(input: { contentType: $contentType, extention: $extention }) {
      success
      uploadKey
      uploadUrl
    }
  }
`;
