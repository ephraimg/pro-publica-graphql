import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});