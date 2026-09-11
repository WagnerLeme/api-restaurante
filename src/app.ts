import express from "express";
import type { Express } from "express";
import cors from "cors";

class App {
    public server: Express;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
    }

    private routes(): void {

    }
}

export default new App().server;