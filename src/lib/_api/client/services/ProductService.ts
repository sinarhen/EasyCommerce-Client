/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductDto } from '../models/CreateProductDto';
import type { ProductDetailsDto } from '../models/ProductDetailsDto';
import type { ProductDto } from '../models/ProductDto';
import type { ProductFiltersDto } from '../models/ProductFiltersDto';
import type { ProductsOrderBy } from '../models/ProductsOrderBy';
import type { UpdateProductDto } from '../models/UpdateProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductService {
    /**
     * @param productId
     * @param orderBy
     * @param filterBy
     * @param pageSize
     * @param pageNumber
     * @param searchTerm
     * @param categoryId
     * @param colorId
     * @param sizeId
     * @param collectionId
     * @param materialId
     * @param occasionId
     * @param minPrice
     * @param maxPrice
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getApiProducts(
        productId?: string,
        orderBy?: ProductsOrderBy,
        filterBy?: string,
        pageSize?: number,
        pageNumber?: number,
        searchTerm?: string,
        categoryId?: string,
        colorId?: string,
        sizeId?: string,
        collectionId?: string,
        materialId?: string,
        occasionId?: string,
        minPrice?: number,
        maxPrice?: number,
    ): CancelablePromise<Array<ProductDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/products',
            query: {
                'ProductId': productId,
                'OrderBy': orderBy,
                'FilterBy': filterBy,
                'PageSize': pageSize,
                'PageNumber': pageNumber,
                'SearchTerm': searchTerm,
                'CategoryId': categoryId,
                'ColorId': colorId,
                'SizeId': sizeId,
                'CollectionId': collectionId,
                'MaterialId': materialId,
                'OccasionId': occasionId,
                'MinPrice': minPrice,
                'MaxPrice': maxPrice,
            },
        });
    }
    /**
     * @param requestBody
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static postApiProducts(
        requestBody?: CreateProductDto,
    ): CancelablePromise<ProductDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/products',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns ProductFiltersDto Success
     * @throws ApiError
     */
    public static getApiProductsFilters(): CancelablePromise<ProductFiltersDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/products/filters',
        });
    }
    /**
     * @param id
     * @returns ProductDetailsDto Success
     * @throws ApiError
     */
    public static getApiProducts1(
        id: string,
    ): CancelablePromise<ProductDetailsDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/products/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static patchApiProducts(
        id: string,
        requestBody?: UpdateProductDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/products/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiProducts(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/products/{id}',
            path: {
                'id': id,
            },
        });
    }
}
