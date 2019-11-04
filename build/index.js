"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./utilities/env");
const express = require("express");
const member_router_1 = require("./express/member-router");
const graphql_server_1 = require("./graphql/graphql-server");
const { PORT } = env_1.env;
const app = express();
app.use(member_router_1.memberRouter);
graphql_server_1.apolloServer.applyMiddleware({ app, path: '/graphql' });
app.listen({ port: PORT }, () => {
    console.log(`
*********************************************************
  Express server ready at http://localhost:${PORT}
  GraphQL server ready at http://localhost:${PORT}${graphql_server_1.apolloServer.graphqlPath}
*********************************************************
  `);
});
//# sourceMappingURL=index.js.map