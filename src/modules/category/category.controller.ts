import type { Request, Response } from "express";
import CategoryService from "./category.service.js";
import categoryService from "./category.service.js";

class CategoryController {
  public async create(req: Request, resp: Response) {
    const { name, description, active } = req.body ?? {};

    const category = await CategoryService.create({
      name,
      description,
      active,
    });

    return resp.status(201).json(category);
  }

  public async findAll(req: Request, resp: Response) {
    const categories = await categoryService.findAll();

    return resp.status(200).json(categories);
  }

  public async findById(req: Request, resp: Response) {
    const { id } = req.params ?? {};

    if (!id || typeof id !== "string") {
      return resp.status(400).json({
        message: "Id inválido",
      });
    }

    const category = await categoryService.findByIdService(id);

    return resp.status(200).json(category);

    /* 
        Parâmetros de Rota -> Faz parte de url
        http://localhost:3000/api/v1/categories/6abb13fae3e712c133199a20
        req.params.id
        const {id} = req.params ?? {};

        http://localhost:3000/api/v1/categories/:category/produtos/:produtoId
        Quando utilizar o Params? 
            - indentificar um recurso
            - Faz parte da URL
            - É obrigatório

        Query Parmans
        http://localhost:3000/api/v1/alunos/cidade=Atibaia&bairro=centro
        http://localhost:3000/api/v1/alunos/pag=2&limit=30

        Quando utilizar o QUERY? 
            - é opcional
            - filtrar resulsados
            - alterar a consulta

        req.query.cidade
        req.query.bairro
        */
  }

  public async update(req: Request, resp: Response): Promise<Response> {
    const { id } = req.params ?? {};
    const { name, description, active } = req.body ?? {};

    if (!id || typeof id !== "string") {
      return resp.status(400).json({
        message: "Id inválido",
      });
    }

    const category = await categoryService.update(id, {
      name,
      description,
      active,
    });

    return resp.status(200).json(category);
  }

  public async delete(req: Request, resp: Response): Promise<Response> {
    const { id } = req.params ?? {};

    if (!id || typeof id !== "string") {
      return resp.status(400).json({
        message: "Id inválido",
      });
    }

    await categoryService.delete(id);

    return resp.status(200).json({
      message: "Categoria deletada com sucesso",
    })
  }
}

export default new CategoryController();
