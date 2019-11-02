import { env } from './utilities/env';
import * as express from 'express';
import { memberRouter } from './express/member-router';
import { apolloServer } from './graphql/graphql-server';

const { PORT } = env;
const app = express();

app.use(memberRouter);

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: PORT }, () => {
  console.log(`
*********************************************************
  Express server ready at http://localhost:${PORT}
  GraphQL server ready at http://localhost:${PORT}${apolloServer.graphqlPath}
*********************************************************
  `);
});