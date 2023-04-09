"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShortStringGenerator {
    generateString() {
        const randomString = Math.random().toString(36).slice(2, 8);
        return randomString;
    }
}
exports.default = ShortStringGenerator;
