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
                const { long_url } = req.body;
                const short_url = yield this.shortLinkService.encodeURL(long_url);
                res.status(200).json(short_url);
            }
            catch (error) {
                next(error);
            }
        });
        this.decodeURL = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { short_url_id } = req.body;
                const long_url = yield this.shortLinkService.decodeURL(short_url_id);
                res.status(200).json(long_url);
            }
            catch (error) {
                next(error);
            }
        });
        this.getShortUrlStatistics = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { short_url_id } = req.params;
                const long_url = yield this.shortLinkService.getShortUrlStatistics(short_url_id);
                res.status(200).json(long_url);
            }
            catch (error) {
                next(error);
            }
        });
        this.redirectShortUrlToLongUrl = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { short_url_id } = req.params;
                const url_object = yield this.shortLinkService.decodeURL(short_url_id);
                res.redirect(url_object.long_url);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = ShortLinkController;
