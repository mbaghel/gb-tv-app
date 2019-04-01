const { ApolloServer } = require("apollo-server");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const typeDefs = require("./typeDefs");
const Query = require("./resolvers/Query");
const { VideosAPI } = require("./apis");

const dataSources = () => ({ VideosAPI: new VideosAPI() });

const context = ({ req }) => {
  const cookie = req.cookies;
  if (cookie) {
    const { gbToken } = jwt.verify(cookie, process.env.APP_SECRET);
    return { gbToken };
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query },
  dataSources,
  context,
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
