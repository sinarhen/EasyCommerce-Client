/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BannedUser } from '../models/BannedUser';
import type { BanUserDto } from '../models/BanUserDto';
import type { ChangeUserRoleDto } from '../models/ChangeUserRoleDto';
import type { SellerUpgradeRequestDetailsDto } from '../models/SellerUpgradeRequestDetailsDto';
import type { SellerUpgradeRequestDto } from '../models/SellerUpgradeRequestDto';
import type { User } from '../models/User';
import type { UserDto } from '../models/UserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
    /**
     * @returns UserDto Success
     * @throws ApiError
     */
    public static getApiAdminUsers(): CancelablePromise<Array<UserDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/users',
        });
    }
    /**
     * @param id
     * @returns string Success
     * @throws ApiError
     */
    public static deleteApiAdminUsers(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/admin/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns User Success
     * @throws ApiError
     */
    public static getApiAdminUsers1(
        id: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/users/{id}',
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
    public static patchApiAdminUsersBan(
        id: string,
        requestBody?: BanUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/admin/users/{id}/ban',
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
    public static patchApiAdminUsersUnban(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/admin/users/{id}/unban',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns BannedUser Success
     * @throws ApiError
     */
    public static getApiAdminUsersBanned(): CancelablePromise<Array<BannedUser>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/users/banned',
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static patchApiAdminUsersRole(
        id: string,
        requestBody?: ChangeUserRoleDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/admin/users/{id}/role',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns SellerUpgradeRequestDto Success
     * @throws ApiError
     */
    public static getApiAdminUsersUpgradeRequests(): CancelablePromise<Array<SellerUpgradeRequestDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/users/upgrade-requests',
        });
    }
    /**
     * @param id
     * @returns SellerUpgradeRequestDetailsDto Success
     * @throws ApiError
     */
    public static getApiAdminUsersUpgradeRequests1(
        id: string,
    ): CancelablePromise<SellerUpgradeRequestDetailsDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/users/upgrade-requests/{id}',
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
    public static patchApiAdminUsersUpgradeRequests(
        id: string,
        requestBody?: SellerUpgradeRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/admin/users/upgrade-requests/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
