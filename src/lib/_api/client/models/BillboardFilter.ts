/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Billboard } from './Billboard';
import type { Category } from './Category';
import type { Color } from './Color';
import type { Gender } from './Gender';
import type { ProductsOrderBy } from './ProductsOrderBy';
import type { Season } from './Season';
import type { Size } from './Size';
export type BillboardFilter = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    title: string;
    subtitle?: string | null;
    gender?: Gender;
    categoryId?: string | null;
    season?: Season;
    colorId?: string | null;
    orderBy?: ProductsOrderBy;
    fromPrice?: number | null;
    toPrice?: number | null;
    sizeId?: string | null;
    search?: string | null;
    billboardId?: string | null;
    billboard?: Billboard;
    category?: Category;
    color?: Color;
    size?: Size;
};

