import gql from 'graphql-tag';

export const typeDefs = gql`
  type Item {
    id: ID!
    text: String!
    done: Boolean!
  }

  type User {
    avatarUrl
    name
    login
    location
  }

  type RepoPrimaryLanguage {
    color: String!
    name: String!
  }

  type Repo {
    createdAt: String!
    name: String!
    shortDescriptionHTML: Boolean!
    primaryLanguage: RepoPrimaryLanguage
  }
`;