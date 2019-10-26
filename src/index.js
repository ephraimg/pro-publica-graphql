import express from 'express';
import { apolloServer } from './graphql/graphql-server';

const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello world!');
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
});