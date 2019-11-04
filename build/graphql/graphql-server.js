"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typedefs_1 = require("./typedefs");
const resolvers_1 = require("./resolvers");
exports.apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: typedefs_1.typeDefs,
    resolvers: resolvers_1.resolvers
});
//# sourceMappingURL=graphql-server.js.map