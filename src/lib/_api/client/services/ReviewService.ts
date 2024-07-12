/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateReviewDto } from '../models/CreateReviewDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReviewService {
    /**
     * @param productId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiProductsReviews(
        productId: string,
        requestBody?: CreateReviewDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/products/{productId}/reviews',
            path: {
                'productId': productId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param reviewId
     * @param productId
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiProductsReviews(
        reviewId: string,
        productId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/products/{productId}/reviews/{reviewId}',
            path: {
                'reviewId': reviewId,
                'productId': productId,
            },
        });
    }
}
