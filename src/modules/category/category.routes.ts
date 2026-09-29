import { Router } from "express";
import CategoryController from "./category.controller.js";

const CategoryRoutes = Router();

CategoryRoutes.post('/', CategoryController.create);


export default CategoryRoutes;