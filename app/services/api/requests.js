import {gql} from "@apollo/client";

export const GET_EVENTS = gql`
  query getEvents($first: Int!, $after: String) {
    events(first: $first, after: $after, where: {language: DEFAULT, orderby: {field: STARTEVENT, order: ASC}}) {
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
                eventFields {
                  excerpt
                  date
                  time
                  place
                  video
                  photo {
                    edges {
                      node {
                        sourceUrl(size: LARGE)
                      }
                    }
                  }
               }
          }
        }
    }
  }
`;
export const GET_EVENT = gql`
    query getEvent($slug: ID!) {
        event(id: $slug, idType: SLUG) {
            databaseId
            title
            content
            slug
            eventFields {
                excerpt
                date
                time
                place
                video
                photo {
                  edges {
                    node {
                      sourceUrl(size: LARGE)
                    }
                  }
               }
            }
        }
    }
`;
export const GET_FEATURED_EVENTS = gql`
  query getFeaturedEvents($count: Int!, $section: ID!){
    events(first: $count, where: {language: DEFAULT, sectionType: $section, orderby: {field: STARTEVENT, order: ASC}}) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node{
          id
          databaseId
          title(format: RENDERED)
          content(format: RENDERED)
          slug
          eventFields {
            excerpt
            date
            time
            place
            video
            photo {
              edges {
                node {
                  sourceUrl(size: LARGE)
                }
              }
            }
          }
         }
        }
    }
    section(id: $section, idType: DATABASE_ID) {
            name
            description
            slug
    }
  }
`;
export const GET_LESSONS = gql`
  query getLessons($first: Int!, $after: String) {
    lessons(first: $first, after: $after, where: {language: DEFAULT}) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
          node {
            id
            title(format: RENDERED)
             content(format: RENDERED)
             lessonFields {
             day
             excerpt
             place
             time
             video
             photo {
             edges {
               node {
                 sourceUrl(size: LARGE)
               }
             }
           }
         }
             contentTypeName
            
          }
        }
    }
  }
`;
export const GET_LESSON = gql`
    query getLesson($slug: ID!) {
        lesson(id: $slug, idType: SLUG) {
            databaseId
            title
            content
            slug
            lessonFields {
                excerpt
                day
                time
                place
                video
                photo {
                  edges {
                    node {
                      sourceUrl(size: LARGE)
                    }
                  }
               }
            }
        }
    }
`;
export const GET_FEATURED_LESSONS = gql`
  query getFeaturedLessons($count: Int!, $chapter: ID!){
    lessons(first: $count, where: {language: DEFAULT, chapterType: $chapter}) {
      edges {
          node {
            id
            databaseId
            title(format: RENDERED)
            content(format: RENDERED)
            slug
            lessonFields {
                day
                excerpt
                place
                time
                video
                photo {
                edges {
                  node {
                    sourceUrl(size: LARGE)
                  }
                }
              }
            }
            contentTypeName
          }
        }
    }
    chapter(id: $chapter, idType: DATABASE_ID) {
      description
      name
    }
  }
`;
export const GET_EVENT_SLUGS = gql`
            query getEventSlugs {
                events(first: 100, where: {language: DEFAULT}) {
                    nodes {
                        slug
                    }
                }
            }
        `;
export const GET_LESSON_SLUGS = gql`
            query getLessonSlugs {
                lessons(first: 100, where: {language: DEFAULT}) {
                    nodes {
                        slug
                    }
                }
            }
        `;
export const GET_CATEGORY_INFO = gql`
query getCategoryInfo($category: String!) {
    contentType(id: $category, idType: NAME) {
        id
        description
        graphqlPluralName
        graphqlSingleName
    }
}`;
export const BATCH_SIZE = 5;
export const BATCH_HOMEPAGE_EVENTS = 10;