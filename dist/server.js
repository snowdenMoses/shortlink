"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortlink_route_1 = __importDefault(require("./routes/shortlink.route"));
const app_1 = __importDefault(require("./app"));
const route = new shortlink_route_1.default();
const server = new app_1.default();
server.initializeServer(route);
server.listen();
