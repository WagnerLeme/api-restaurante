import { Router } from "express";

const routes = Router();

routes.get("/teste", (request, response) => {
    console.log("Chamando o endpoint TESTE");
    return response.status(200).json({
        message: "Endpoint de teste funcionando",
    });
});

export default routes;