import {gql} from "@apollo/client";

export const GET_EVENTS = gql`
  query getEvents($first: Int!, $after: String) {
    events(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
          node {
            id
            databaseId
            title(format: RENDERED)
            content(format: RENDERED)
            slug
            event_fields {
              excerpt
              dateAndTime
              place
              video
              photo {
                sourceUrl(size: LARGE)
              }
            }
            featured_settings {
              featuredHome
              templateCard
            }
          }
        }
    }
  }
`;
export const GET_FEATURED_EVENTS = gql`
  query getFeaturedEvents{
    events(where: {featuredHome: true}) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
          node {
            id
            databaseId
            title(format: RENDERED)
            content(format: RENDERED)
            slug
            event_fields {
              excerpt
              dateAndTime
              place
              video
              photo {
                sourceUrl(size: LARGE)
              }
            }
            featured_settings {
              featuredHome
              templateCard
            }
          }
        }
    }
  }
`;
export const BATCH_SIZE = 5;