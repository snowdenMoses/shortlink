"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shortlink_controller_1 = __importDefault(require("../controller/shortlink.controller"));
class ShortLinkRoute {
    constructor() {
        this.path = '';
        this.router = (0, express_1.Router)();
        this.shortLinkController = new shortlink_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/:shortUrlId`, this.shortLinkController.redirectShortUrlToLongUrl);
        this.router.get(`${this.path}/statistics/:shortUrlId`, this.shortLinkController.getShortUrlStatistics);
        this.router.post(`${this.path}/encode`, this.shortLinkController.encodeURL);
        this.router.post(`${this.path}/decode`, this.shortLinkController.decodeURL);
    }
}
exports.default = ShortLinkRoute;
