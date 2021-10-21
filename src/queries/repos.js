import gql from 'graphql-tag';

export const REPOS = gql `
query userRepos($login: String!)  {
  user(login:$login) {
    repositories(first: 8, orderBy: {field: CREATED_AT, direction: DESC}){
      edges{
        node{
          createdAt
          name
          shortDescriptionHTML
          primaryLanguage{
            color
            name
          }
          url
        }
      }
    }
  }
}`