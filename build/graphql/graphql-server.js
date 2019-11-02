"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typedefs_1 = require("./typedefs");
var resolvers_1 = require("./resolvers");
exports.apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: typedefs_1.typeDefs,
    resolvers: resolvers_1.resolvers
});
//# sourceMappingURL=graphql-server.js.map