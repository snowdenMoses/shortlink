// import { request } from "express";
const request = require("supertest");
import App from "./app"

const app = new App()

describe("POST /encode", () => {
    describe("given a long url", () => {
        test("Should respond with a 200 status code", async () => {
            const response = await request(app.app).post('/encode').send({
                longUrl: "longUrl"
            })
            expect(response.statusCode).toBe(200)
        })
        test("Should specify json in the content type header", async () => {
            const response = await request(app.app).post('/encode').send({
                longUrl: "longUrl"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has shorturl", async () => {
            const response = await request(app.app).post('/encode').send({
                longUrl: "longUrl"
            })
            expect(response.body.shortUrl).toBeDefined()
        })
    })
    describe("when the long url value is empty", () => {
        test("Should respond with a 404 status code", async () => {
            const response = await request(app.app).post('/encode').send({

            })
            expect(response.statusCode).toBe(404)
        })
    })
})
describe("POST /decode", () => {
    describe("given a shortUrlId to be decode", () => {
        test("Should respond with a 200 status code", async () => {
            const response = await request(app.app).post('/decode').send({
                shortUrlId: "shortUrlId"
            })
            expect(response.statusCode).toBe(200)
        })
        test("Should specify json in the content type header", async () => {
            const response = await request(app.app).post('/decode').send({
                shortUrlId: "shortUrlId"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has long url", async () => {
            const response = await request(app.app).post('/decode').send({
                shortUrlId: "shortUrlId"
            })
            expect(response.body.longUrl).toBeDefined()
        })
    })
    describe("when the short url value is empty", () => {
        test("Should respond with a 404 status code", async () => {
            const response = await request(app.app).post('/decode').send({

            })
            expect(response.statusCode).toBe(404)
        })
    })
})

describe("POST /statistics/:shortUrlId", () => {
    describe("given a shortUrlId  so as to get it's statistics", () => {
        test("Should respond with a 200 status code", async () => {
            const response = await request(app.app).get("/statistics/shortUrl")
            expect(response.statusCode).toBe(200)
        })
        test("Should specify json in the content type header", async () => {
            const response = await request(app.app).get("/statistics/shortUrl")
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has originalUrl", async () => {
            const response = await request(app.app).get("/statistics/shortUrl")
            expect(response.body.originalUrl).toBeDefined()
        })
        test("response has createdAt", async () => {
            const response = await request(app.app).get("/statistics/shortUrl")
            expect(response.body.originalUrl).toBeDefined()
        })
    })
})