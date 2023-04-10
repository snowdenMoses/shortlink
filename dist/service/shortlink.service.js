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
const short_string_generator_1 = __importDefault(require("../helperMethods/short_string_generator"));
const http_exception_1 = require("../helperMethods/http_exception");
class ShortLinkService {
    constructor() {
        this.port = process.env.PORT || 3005;
        this.arrayOfUrls = [];
        this.shortStringGenerator = new short_string_generator_1.default();
    }
    encodeURL(longUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!longUrl)
                throw new http_exception_1.HttpException(404, "Not Found");
            const shortUrlId = this.shortStringGenerator.generateString();
            const createdAt = (new Date()).toDateString();
            this.arrayOfUrls.push({ shortUrlId, longUrl, createdAt });
            const shortUrl = `http://localhost:${this.port}/${shortUrlId}`;
            return { shortUrl };
        });
    }
    decodeURL(shortUrlId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!shortUrlId)
                throw new http_exception_1.HttpException(404, "Not Found");
            const filteredUrl = this.arrayOfUrls.filter(url => url.shortUrlId === shortUrlId);
            let longUrl = "";
            for (let i = 0; i < filteredUrl.length; i++) {
                longUrl = filteredUrl[i].longUrl;
            }
            return { longUrl };
        });
    }
    getShortUrlStatistics(shortUrlId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!shortUrlId)
                throw new http_exception_1.HttpException(404, "Not Found");
            const filteredUrl = this.arrayOfUrls.filter(url => url.shortUrlId === shortUrlId);
            let longUrl = "";
            let createdAt = "";
            for (let i = 0; i < filteredUrl.length; i++) {
                longUrl = filteredUrl[i].longUrl;
                createdAt = filteredUrl[i].createdAt;
            }
            return {
                originalUrl: longUrl,
                createdAt
            };
        });
    }
}
exports.default = ShortLinkService;
