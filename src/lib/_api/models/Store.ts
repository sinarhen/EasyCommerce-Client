/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collection } from './Collection';
import type { User } from './User';
export type Store = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    name: string;
    description?: string | null;
    bannerUrl?: string | null;
    logoUrl?: string | null;
    address?: string | null;
    contacts?: string | null;
    email?: string | null;
    ownerId?: string | null;
    isVerified?: boolean;
    owner?: User;
    collections: Array<Collection>;
};

