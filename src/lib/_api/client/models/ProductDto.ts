/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColorDto } from './ColorDto';
import type { IdNameDto } from './IdNameDto';
import type { ProductCategoryDto } from './ProductCategoryDto';
import type { ProductImageDto } from './ProductImageDto';
export type ProductDto = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    categories?: Array<ProductCategoryDto> | null;
    name?: string | null;
    description?: string | null;
    discount?: number | null;
    occasion?: IdNameDto;
    collection?: IdNameDto;
    gender?: string | null;
    season?: string | null;
    isFavorite?: boolean;
    avgRating?: number;
    minPrice?: number;
    isNew?: boolean;
    isAvailable?: boolean;
    isBestseller?: boolean;
    colors?: Array<ColorDto> | null;
    images?: Array<ProductImageDto> | null;
};

