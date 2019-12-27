import { ApolloServer, makeExecutableSchema } from "apollo-server";

const typeDefs = `
   type Hola{
      message:String!
   }

   type Query{
      hola(name:String!):Hola!
   }
`;

const resolvers = {
  Query: {
    hola: (_, { name }) => {
      return { message: `Hola ${name}` };
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const apollo = new ApolloServer({
  schema
});

const port = process.env.PORT || "4000";

apollo.listen(port).then(({ url }) => {
  console.log(`Server run in port ${url}`);
});
