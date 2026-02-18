export const repoTypeDefs = `#graphql
  type Language {
    name: String
    color: String
  }

  type Repository {
    name: String!
    description: String
    url: String!
    stargazerCount: Int
    primaryLanguage: Language
    homepageUrl: String
    owner: String
  }

  extend type Query {
    pinnedRepos(username: String!): [Repository]
    recentRepos(username: String!): [Repository]
  }
`;
