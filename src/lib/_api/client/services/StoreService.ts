/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreDto } from '../models/StoreDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoreService {
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiStoresMy(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/my',
        });
    }
    /**
     * @param id
     * @returns StoreDto Success
     * @throws ApiError
     */
    public static getApiStores(
        id: string,
    ): CancelablePromise<StoreDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/{id}',
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
    public static patchApiStores(
        id: string,
        requestBody?: StoreDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/stores/{id}',
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
    public static deleteApiStores(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/stores/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiStores1(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiStores(
        requestBody?: StoreDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stores',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
