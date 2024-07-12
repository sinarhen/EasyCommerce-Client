/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColorDto } from './ColorDto';
import type { IdNameDto } from './IdNameDto';
import type { MaterialDto } from './MaterialDto';
import type { ProductCategoryDto } from './ProductCategoryDto';
import type { ProductImageDto } from './ProductImageDto';
import type { ProductStockDto } from './ProductStockDto';
import type { ReviewDto } from './ReviewDto';
import type { SizeDto } from './SizeDto';
export type ProductDetailsDto = {
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
    sizeChartImageUrl?: string | null;
    materials?: Array<MaterialDto> | null;
    sizes?: Array<SizeDto> | null;
    reviews?: Array<ReviewDto> | null;
    stocks?: Array<ProductStockDto> | null;
};

