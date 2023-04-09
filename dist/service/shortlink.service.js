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
class ShortLinkService {
    constructor() {
        this.port = process.env.PORT || 3005;
        this.arrayOfUrls = [];
        this.shortStringGenerator = new short_string_generator_1.default();
    }
    encodeURL(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const shortUrlId = this.shortStringGenerator.generateString();
            this.arrayOfUrls.push({ shortUrlId, url });
            const shortUrl = `http://localhost:${this.port}/${shortUrlId}`;
            return { shortUrl };
        });
    }
    decodeURL(shortUrlId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.arrayOfUrls.find(url => url.shortUrlId === shortUrlId);
            const longUrl = url === null || url === void 0 ? void 0 : url.url;
            return { longUrl };
        });
    }
    getShortUrlStatistics(shortUrlId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.arrayOfUrls.find(url => url.shortUrlId === shortUrlId);
            const long_url = url.url;
            return { originalUrl: long_url };
        });
    }
}
exports.default = ShortLinkService;
