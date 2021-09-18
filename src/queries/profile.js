import gql from 'graphql-tag';

export const PROFILE = gql`
query userProfile($login: String!)  {
  user(login:$login) {
    name
    company
    bio
    twitterUsername
    websiteUrl
    url
    repositories(first: 10, privacy: PUBLIC, orderBy: {field:UPDATED_AT, direction: DESC}) {
      totalCount
      edges {
        node {
          name
          description
          url
        }
      }
    }
  }
}`