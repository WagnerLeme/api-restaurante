export interface ICategory {
    name: string;
    description?: string;
    active: boolean;
}

export interface ICreateCategoryDTO {
    name: string;
    description?: string;
    active: boolean;
}

export interface IUpdateCategoryDTO {
    name?: string;
    description?: string;
    active?: boolean;
}