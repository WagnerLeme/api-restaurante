import type { Request, Response } from "express";

class AuthController {
    public async login(req: Request, resp: Response) {
        const { email, senha } = req.body || {};
        const role = email.includes("admin") ? "admin" : "user";

        return resp.status(200).json({
            token: "fake-jwt-token",
            user:{
                name: role == "admin" ? "Administrador" : "Padrão",
                email: email,
                role: role,
            },
        });
    }
}

export default new AuthController();