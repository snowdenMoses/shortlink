// import { request } from "express";
const request = require("supertest");
import App from "./app"

const app = new App()
describe("POST /encode", () => {
    describe("given a lengthy url", () => {
        // Should respond with a 200 status code
        test("Should respond with a 200 status code", async () => {
            const response = await request(app.app).post('/encode').send({
                url: "url"
            })
            expect(response.statusCode).toBe(200)
        })
        // should specify json in the content type header
        test("Should specify json in the content type header", async () => {
            const response = await request(app.app).post('/encode').send({
                url: "url"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has shorturl", async () => {
            const response = await request(app.app).post('/encode').send({
                url: "url"
            })
            expect(response.body.shortUrl).toBeDefined()
        })
    })
    describe("when the original url value is empty", () => {
        // Should respond with a status code
        test("Should respond with a 404 status code", async () => {
            const response = await request(app.app).post('/encode').send({

            })
            expect(response.statusCode).toBe(404)
        })
    })
})
describe("POST /decode", () => {
    describe("given a short url as an id", () => {
        // Should respond with a 200 status code
        test("Should respond with a 200 status code", async () => {
            const response = await request(app.app).post('/decode').send({
                id: "short id"
            })
            expect(response.statusCode).toBe(200)
        })
        // should specify json in the content type header
        test("Should specify json in the content type header", async () => {
            const response = await request(app.app).post('/decode').send({
                id: "short id"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has long_url", async () => {
            const response = await request(app.app).post('/decode').send({
                id: "short url"
            })
            expect(response.body.long_url).toBeDefined()
        })
    })
    describe("when the short url value is empty", () => {
        // Should respond with a status code
        test("Should respond with a 404 status code", async () => {
            const response = await request(app.app).post('/decode').send({

            })
            expect(response.statusCode).toBe(404)
        })
    })
})