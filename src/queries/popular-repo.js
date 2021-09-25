import gql from 'graphql-tag';

export const POPULAR_REPO = gql`
query userPopularRepo($login: String!)  {
  user(login:$login) {
    topRepositories(first: 4, orderBy: {field: UPDATED_AT, direction: DESC}){
     edges {
        node {
          name
          shortDescriptionHTML
          primaryLanguage{
            name
            color
            id
          }
          url
        }
      }
    }
  }
}`