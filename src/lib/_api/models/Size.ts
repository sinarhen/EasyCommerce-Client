/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategorySize } from './CategorySize';
import type { Product } from './Product';
export type Size = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    name?: string | null;
    value?: number;
    categories?: Array<CategorySize> | null;
    stocks?: Array<Product> | null;
};

