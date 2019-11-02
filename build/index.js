"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = require("./utilities/env");
var express = require("express");
var member_router_1 = require("./express/member-router");
var graphql_server_1 = require("./graphql/graphql-server");
var PORT = env_1.env.PORT;
var app = express();
app.use(member_router_1.memberRouter);
graphql_server_1.apolloServer.applyMiddleware({ app: app, path: '/graphql' });
app.listen({ port: PORT }, function () {
    console.log("\n*********************************************************\n  Express server ready at http://localhost:" + PORT + "\n  GraphQL server ready at http://localhost:" + PORT + graphql_server_1.apolloServer.graphqlPath + "\n*********************************************************\n  ");
});
//# sourceMappingURL=index.js.map