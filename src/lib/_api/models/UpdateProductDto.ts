/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaterialDto } from './MaterialDto';
import type { ProductStockDto } from './ProductStockDto';
export type UpdateProductDto = {
    name?: string | null;
    categoryId?: string;
    description?: string | null;
    discount?: number | null;
    occasionId?: string;
    sizeChartImageUrl?: string | null;
    gender?: string | null;
    season?: string | null;
    mainMaterialId?: string;
    collectionId?: string | null;
    materials?: Array<MaterialDto> | null;
    stocks?: Array<ProductStockDto> | null;
};

