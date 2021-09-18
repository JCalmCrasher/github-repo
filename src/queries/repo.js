import gql from 'graphql-tag';

export const REPO = gql`
query userRepo ($login:String!)
{
  search(query:$login, type:REPOSITORY, first:10){
  ... on Repository {
      owner {
        avatarUrl
        url
      }
      name
      stargazers {
        totalCount
      }
      forks {
        totalCount
      }
    }
  }
}`