"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const member_resolvers_1 = require("./member.resolvers");
exports.resolvers = Object.assign({ Query: Object.assign({}, member_resolvers_1.memberResolvers) }, member_resolvers_1.memberFieldResolvers);
//# sourceMappingURL=index.js.map