/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Material } from './Material';
import type { Product } from './Product';
export type ProductMaterial = {
    createdAt?: string;
    updatedAt?: string | null;
    productId?: string;
    materialId?: string;
    percentage?: number;
    material?: Material;
    product?: Product;
};

