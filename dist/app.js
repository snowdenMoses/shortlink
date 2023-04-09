"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3005;
        //   constructor (route: any) {
        //     this.initializeServer(route)
        //   }
        this.initializeServer = (route) => {
            this.app.use(express_1.default.json());
            this.app.use('/', route.router);
        };
        this.listen = () => {
            const server = this.app.listen(this.port, () => {
                console.log(`Listening on port ${this.port}`);
            });
            return server;
        };
    }
}
exports.default = App;
