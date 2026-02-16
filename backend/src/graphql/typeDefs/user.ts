export const userTypeDefs = `#graphql
  type User {
    login: String!
    name: String
    avatarUrl: String
    bio: String
    url: String
  }

  extend type Query {
    me(username: String!): User
  }
`;
