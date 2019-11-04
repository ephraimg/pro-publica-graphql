"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("../utilities/http");
const uris_1 = require("../utilities/uris");
const constants_1 = require("../utilities/constants");
const memberRouter = express.Router();
exports.memberRouter = memberRouter;
memberRouter.get('/senate-members', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { session = constants_1.currentSession } = req.query;
    const results = yield http_1.callProPub({
        url: uris_1.senateMembersUri(session)
    });
    res.send(results);
}));
memberRouter.get('/house-members', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { session = constants_1.currentSession } = req.query;
    const results = yield http_1.callProPub({
        url: uris_1.houseMembersUri(session)
    });
    res.send(results);
}));
//# sourceMappingURL=member-router.js.map