import mongoose, { Schema } from "mongoose";
import type { ICategory } from "./category.types.js";

const categorySchema = new Schema<ICategory>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        }, 
        description: {
            type: String,
            required: false,
            trim: true
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model<ICategory>('Category', categorySchema);

export default Category;