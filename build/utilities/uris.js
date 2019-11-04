"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const baseProPubUri = 'https://api.propublica.org/congress/v1';
exports.senateMembersUri = (session = constants_1.currentSession) => `${baseProPubUri}/${session}/senate/members.json`;
exports.houseMembersUri = (session = constants_1.currentSession) => `${baseProPubUri}/${session}/house/members.json`;
//# sourceMappingURL=uris.js.map