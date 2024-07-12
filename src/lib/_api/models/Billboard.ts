/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillboardFilter } from './BillboardFilter';
import type { Collection } from './Collection';
export type Billboard = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    title: string;
    subtitle?: string | null;
    imageUrl?: string | null;
    collectionId?: string;
    billboardFilterId?: string;
    collection?: Collection;
    billboardFilter: BillboardFilter;
};

