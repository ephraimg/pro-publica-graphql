import { env } from './utilities/env';
import express from 'express';
import { apolloServer } from './graphql/graphql-server';
import { callProPub } from './utilities/http';
import { senateMembersUri, houseMembersUri } from './utilities/uris';
import { currentSession } from '~/src/utilities/constants';

const { PORT } = env;
const app = express();

app.get('/senate-members', async (req, res) => {
  const { session = currentSession } = req.query;
  const results = await callProPub({
    url: senateMembersUri(session)
  });
  res.send(results);
})

app.get('/house-members', async (req, res) => {
  const { session = currentSession } = req.query;
  const results = await callProPub({
    url: houseMembersUri(session)
  });
  res.send(results);
})

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: PORT }, () => {
  console.log(`
*********************************************************
  Express server ready at http://localhost:${PORT}
  GraphQL server ready at http://localhost:${PORT}${apolloServer.graphqlPath}
*********************************************************
  `);
});