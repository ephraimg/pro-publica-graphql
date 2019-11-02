"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var baseProPubUri = 'https://api.propublica.org/congress/v1';
exports.senateMembersUri = function (session) {
    if (session === void 0) { session = constants_1.currentSession; }
    return baseProPubUri + "/" + session + "/senate/members.json";
};
exports.houseMembersUri = function (session) {
    if (session === void 0) { session = constants_1.currentSession; }
    return baseProPubUri + "/" + session + "/house/members.json";
};
//# sourceMappingURL=uris.js.map