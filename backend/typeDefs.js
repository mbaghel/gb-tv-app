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
  type VideoURL {
    hd: String
    high: String!
    low: String!
    savedTime: Int
  }
  type Query {
    getLatest: [Video]
    isRegistered: Boolean!
    getURLs(id: String!): VideoURL!
    authorizePlayback(url: String!): String!
  }
  type Mutation {
    signin(appCode: String!): SuccessMessage
    signout: SuccessMessage
  }
`;

module.exports = typeDefs;
