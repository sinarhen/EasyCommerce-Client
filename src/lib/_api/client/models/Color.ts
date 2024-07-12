/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from './OrderItem';
import type { ProductStock } from './ProductStock';
export type Color = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    hexCode?: string | null;
    name: string;
    stocks?: Array<ProductStock> | null;
    orders?: Array<OrderItem> | null;
};

