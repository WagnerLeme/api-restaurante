import { Router } from "express";
import CategoryRoutes from "./modules/category/category.routes.js";

const routes = Router();

routes.get("/teste", (request, response) => {
    console.log("Chamando o endpoint TESTE");
    return response.status(200).json({
        message: "Endpoint de teste funcionando",
    });
});

routes.use("/categories", CategoryRoutes);

export default routes;