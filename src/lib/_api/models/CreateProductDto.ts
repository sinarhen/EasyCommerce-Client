/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaterialDto } from './MaterialDto';
import type { ProductImageDto } from './ProductImageDto';
import type { ProductStockDto } from './ProductStockDto';
export type CreateProductDto = {
    name: string;
    categoryId?: string;
    description?: string | null;
    discount?: number | null;
    sizeChartImageUrl?: string | null;
    gender?: string | null;
    season?: string | null;
    occasionId?: string | null;
    collectionId: string;
    materials?: Array<MaterialDto> | null;
    stocks?: Array<ProductStockDto> | null;
    images?: Array<ProductImageDto> | null;
};

