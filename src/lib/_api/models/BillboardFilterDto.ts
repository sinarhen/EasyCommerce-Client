/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Gender } from './Gender';
import type { Season } from './Season';
export type BillboardFilterDto = {
    title?: string | null;
    subtitle?: string | null;
    gender?: Gender;
    season?: Season;
    orderBy?: string | null;
    fromPrice?: number | null;
    toPrice?: number | null;
    search?: string | null;
    categoryId?: string | null;
    colorId?: string | null;
    sizeId?: string | null;
};

