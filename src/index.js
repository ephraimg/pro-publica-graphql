import { env } from '~/src/utilities/env';
import express from 'express';
import { memberRouter } from '~/src/express/member-router';
import { apolloServer } from '~/src/graphql/graphql-server';

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