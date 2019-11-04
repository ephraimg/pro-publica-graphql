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
const env_1 = require("./env");
const axios_1 = require("axios");
const { PRO_PUB_KEY } = env_1.env;
const addProPubKey = (config) => {
    const headers = config.headers || {};
    const headersWithKey = Object.assign(Object.assign({}, headers), { 'X-API-Key': PRO_PUB_KEY });
    return Object.assign(Object.assign({}, config), { headers: headersWithKey });
};
exports.callProPub = (config) => __awaiter(void 0, void 0, void 0, function* () {
    const configWithKey = addProPubKey(config);
    try {
        const resp = yield axios_1.default(configWithKey);
        if (resp && resp.data && resp.data.results) {
            return resp.data.results;
        }
        throw new Error('Could not fetch data from Pro Publica');
    }
    catch (error) {
        throw error;
    }
});
//# sourceMappingURL=http.js.map