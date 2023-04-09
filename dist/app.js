"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shortlink_route_1 = __importDefault(require("./routes/shortlink.route"));
class App {
    constructor(route) {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3005;
        this.initializeServer = (route) => {
            this.app.use(express_1.default.json());
            this.app.use("/", route.router);
            this.app.listen(this.port, () => {
                console.log(`Listening on port ${this.port}`);
            });
        };
        this.initializeServer(route);
    }
}
const route = new shortlink_route_1.default();
const server = new App(route);
