/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBillboardDto } from '../models/CreateBillboardDto';
import type { UpdateBillboardDto } from '../models/UpdateBillboardDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BillboardService {
    /**
     * @param collectionId
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCollectionsBillboards(
        collectionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/collections/{collectionId}/billboards',
            path: {
                'collectionId': collectionId,
            },
        });
    }
    /**
     * @param collectionId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCollectionsBillboards(
        collectionId: string,
        requestBody?: CreateBillboardDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/collections/{collectionId}/billboards',
            path: {
                'collectionId': collectionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param billboardId
     * @param collectionId
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static patchApiCollectionsBillboards(
        billboardId: string,
        collectionId: string,
        requestBody?: UpdateBillboardDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/collections/{collectionId}/billboards/{billboardId}',
            path: {
                'billboardId': billboardId,
                'collectionId': collectionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param collectionId
     * @param billboardId
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiCollectionsBillboards(
        collectionId: string,
        billboardId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/collections/{collectionId}/billboards/{billboardId}',
            path: {
                'collectionId': collectionId,
                'billboardId': billboardId,
            },
        });
    }
}
