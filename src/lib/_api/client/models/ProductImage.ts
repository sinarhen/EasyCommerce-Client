/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Color } from './Color';
import type { Product } from './Product';
export type ProductImage = {
    createdAt?: string;
    updatedAt?: string | null;
    productId?: string;
    colorId?: string;
    imageUrls?: Array<string> | null;
    product?: Product;
    color?: Color;
};

