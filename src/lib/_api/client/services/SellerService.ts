/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateOrderStatusDto } from '../models/UpdateOrderStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SellerService {
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiSeller(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/seller',
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiSellerOrders(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/seller/orders',
        });
    }
    /**
     * @param orderId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static patchApiSellerOrders(
        orderId: string,
        requestBody?: UpdateOrderStatusDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/seller/orders/{orderId}',
            path: {
                'orderId': orderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
