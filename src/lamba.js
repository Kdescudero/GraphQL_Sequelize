import { ApolloServer } from "apollo-server-lambda";
import config from "./apollo-config"

const server = new ApolloServer(config);

exports.handler = server.createHandler();