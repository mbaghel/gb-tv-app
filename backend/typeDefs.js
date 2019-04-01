const { gql } = require("apollo-server");

const typeDefs = gql`
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
`;

module.exports = typeDefs;
