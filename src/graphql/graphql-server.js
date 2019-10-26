import { ApolloServer } from 'apollo-server-express';

const typeDefs = `
  type Query { hello: String! }
`;

const resolvers = {
  Query: { hello: () => 'Hello world!' }
};

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});