/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDto } from './UserDto';
export type StoreDto = {
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
    isVerified?: boolean;
    owner?: UserDto;
};

