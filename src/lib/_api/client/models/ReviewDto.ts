/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Rating } from './Rating';
import type { ReviewProductDto } from './ReviewProductDto';
import type { UserDto } from './UserDto';
export type ReviewDto = {
    id?: string;
    user?: UserDto;
    title?: string | null;
    content?: string | null;
    rating?: Rating;
    createdAt?: string;
    product?: ReviewProductDto;
};

