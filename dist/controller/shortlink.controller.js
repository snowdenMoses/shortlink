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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortlink_service_1 = __importDefault(require("../service/shortlink.service"));
class ShortLinkController {
    constructor() {
        this.shortLinkService = new shortlink_service_1.default();
        this.encodeURL = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { longUrl } = req.body;
                const shortUrl = yield this.shortLinkService.encodeURL(longUrl);
                res.status(200).json(shortUrl);
            }
            catch (error) {
                next(error);
            }
        });
        this.decodeURL = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { shortUrlId } = req.body;
                const longUrl = yield this.shortLinkService.decodeURL(shortUrlId);
                res.status(200).json(longUrl);
            }
            catch (error) {
                next(error);
            }
        });
        this.getShortUrlStatistics = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { shortUrlId } = req.params;
                const longUrl = yield this.shortLinkService.getShortUrlStatistics(shortUrlId);
                res.status(200).json(longUrl);
            }
            catch (error) {
                next(error);
            }
        });
        this.redirectShortUrlToLongUrl = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { shortUrlId } = req.params;
                const url_object = yield this.shortLinkService.decodeURL(shortUrlId);
                res.redirect(url_object.longUrl);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = ShortLinkController;
