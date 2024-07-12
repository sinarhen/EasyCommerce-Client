/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategorySize } from './CategorySize';
import type { ProductCategory } from './ProductCategory';
export type Category = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    parentCategoryId?: string | null;
    name: string;
    imageUrl?: string | null;
    parentCategory?: Category;
    subCategories?: Array<Category> | null;
    products?: Array<ProductCategory> | null;
    sizes?: Array<CategorySize> | null;
};

