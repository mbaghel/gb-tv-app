const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const typeDefs = require("./typeDefs");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const { VideosAPI, AuthAPI } = require("./apis");

const app = express();

app.use(cookieParser());

app.use((req, res, next) => {
  const { gbToken } = req.cookies;
  console.log(gbToken);
  if (gbToken) {
    const { regCode } = jwt.verify(gbToken, process.env.APP_SECRET);
    req.regCode = regCode;
    console.log(regCode);
  }
  next();
});

const dataSources = () => ({
  VideosAPI: new VideosAPI(),
  AuthAPI: new AuthAPI()
});

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation },
  dataSources,
  context: ({ res }) => ({ res })
});

server.applyMiddleware({
  app,
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
});

app.listen({ port: 4000 }, () => {
  console.log(`server ready at http://localhost:4000${server.graphqlPath}`);
});
