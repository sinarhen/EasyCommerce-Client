/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from './Product';
import type { Rating } from './Rating';
import type { User } from './User';
export type Review = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    productId?: string;
    customerId?: string | null;
    title: string;
    content?: string | null;
    rating?: Rating;
    product?: Product;
    user?: User;
};

