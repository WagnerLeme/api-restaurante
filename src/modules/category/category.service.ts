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

    public async findAll(){
        return await Category.find();
    }

    public async findByIdService(id:string){
        return await Category.findById(id); 
    }

    public async update(id: string, data:IUpdateCategoryDTO){
        return await Category.findByIdAndUpdate(id, data, {
            returnDocument: 'after',
            runValidators: true,
        });
    }

    public async delete(id: string){
        return await Category.findByIdAndDelete(id);
    }
    

}

export default new CategoryService;