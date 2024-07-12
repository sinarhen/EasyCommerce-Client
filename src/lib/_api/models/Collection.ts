/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Billboard } from './Billboard';
import type { Product } from './Product';
import type { Store } from './Store';
export type Collection = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    name: string;
    description?: string | null;
    storeId?: string;
    store?: Store;
    products: Array<Product>;
    billboards: Array<Billboard>;
};

