import { ApolloServer, makeExecutableSchema } from "apollo-server";
import models from "./models";
import resolvers from "./resolvers";
import typeDefs from "./types";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const apollo = new ApolloServer({
  schema,
  context: {
    models
  }
});

const port = process.env.PORT || "3001";

models.sequelize.sync({ force: true }).then(() => {
  apollo.listen(port).then(({ url }) => {
    console.log(`Server run in port ${url}`);
  });
});
