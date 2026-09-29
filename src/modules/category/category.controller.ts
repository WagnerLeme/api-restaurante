import type {Request, Response } from "express";
import CategoryService from "./category.service.js";

class CategoryController {
    public async create(req:Request, resp:Response) {
        const { name, description, active } = req.body ?? {};

        const category = await CategoryService.create({
            name, description, active
        });

        return resp.status(201).json(category);
    }
}

export default new CategoryController();