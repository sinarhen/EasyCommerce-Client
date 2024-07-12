/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeCartItemDto } from '../models/ChangeCartItemDto';
import type { CreateCartItemDto } from '../models/CreateCartItemDto';
import type { SellerInfoCreateDto } from '../models/SellerInfoCreateDto';
import type { WishlistProductDto } from '../models/WishlistProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomerService {
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCustomerReviews(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customer/reviews',
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCustomerCart(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customer/cart',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCustomerCart(
        requestBody?: CreateCartItemDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customer/cart',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static putApiCustomerCart(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/customer/cart',
        });
    }
    /**
     * @param cartProductId
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiCustomerCart(
        cartProductId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/customer/cart/{cartProductId}',
            path: {
                'cartProductId': cartProductId,
            },
        });
    }
    /**
     * @param cartProductId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static patchApiCustomerCart(
        cartProductId: string,
        requestBody?: ChangeCartItemDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/customer/cart/{cartProductId}',
            path: {
                'cartProductId': cartProductId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCustomerCartConfirm(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customer/cart/confirm',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCustomerUpgrade(
        requestBody?: SellerInfoCreateDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customer/upgrade',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCustomerOrders(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customer/orders',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCustomerWishlist(
        requestBody?: WishlistProductDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customer/wishlist',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiCustomerWishlist(
        requestBody?: WishlistProductDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/customer/wishlist',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
