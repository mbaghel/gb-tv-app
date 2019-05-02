const { gql } = require("apollo-server");

const typeDefs = gql`
  type SuccessMessage {
    message: String
  }
  type Video {
    id: Int!
    name: String!
    deck: String!
    premium: Boolean!
    length_seconds: Int!
  }
  type Query {
    getLatest: [Video]
  }
  type Mutation {
    signin(appCode: String!): SuccessMessage
  }
`;

module.exports = typeDefs;
