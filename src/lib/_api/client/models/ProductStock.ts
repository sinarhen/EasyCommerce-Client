/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Color } from './Color';
import type { Product } from './Product';
import type { Size } from './Size';
export type ProductStock = {
    createdAt?: string;
    updatedAt?: string | null;
    productId?: string;
    colorId?: string;
    sizeId?: string;
    price?: number;
    stock?: number;
    discount?: number;
    product?: Product;
    color?: Color;
    size?: Size;
};

