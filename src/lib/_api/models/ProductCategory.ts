/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { Product } from './Product';
export type ProductCategory = {
    createdAt?: string;
    updatedAt?: string | null;
    productId?: string;
    categoryId?: string;
    order?: number;
    product?: Product;
    category?: Category;
};

