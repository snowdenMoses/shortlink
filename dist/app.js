"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shortlink_route_1 = __importDefault(require("./routes/shortlink.route"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3005;
        this.route = new shortlink_route_1.default();
        this.listen = () => {
            const server = this.app.listen(this.port, () => {
                console.log(`Listening on port ${this.port}`);
            });
            return server;
        };
        this.app.use(express_1.default.json());
        this.app.use('/', this.route.router);
    }
}
exports.default = App;
