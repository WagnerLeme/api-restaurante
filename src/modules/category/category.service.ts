/* 
    Papel do category.service.ts

    Ele será responsável por:
        - criar categorias por meio da model
        - listar categorias
        - buscar categorias
        - atualizar
        - excluir 

    Ou seja, concentra as operações e regras de negócio relacionado ao modulo categoria.
*/

import Category from "./category.model.js";
import type {
    ICreateCategoryDTO,
    IUpdateCategoryDTO
} from "./category.types.js";

class CategoryService {

    public async create(data:ICreateCategoryDTO) {
        const category = await Category.create({
            name: data.name,
            description: data.description ?? "",
            active: data.active ?? true,
        });

        return category;
    }
}

export default new CategoryService;