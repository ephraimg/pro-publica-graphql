import { env } from './utilities/env';
import express from 'express';
import { apolloServer } from './graphql/graphql-server';
import { callProPub } from './utilities/http';
import { senateMembersUri, houseMembersUri } from './utilities/uris';

const { PORT } = env;
const app = express();

app.get('/senate-members', async (req, res) => {
  const results = await callProPub({
    url: senateMembersUri
  });
  res.send(results);
})

app.get('/house-members', async (req, res) => {
  const results = await callProPub({
    url: houseMembersUri
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