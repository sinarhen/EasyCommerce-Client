/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeEmailDto } from '../models/ChangeEmailDto';
import type { ChangePasswordDto } from '../models/ChangePasswordDto';
import type { JwtSecurityToken } from '../models/JwtSecurityToken';
import type { LoginDto } from '../models/LoginDto';
import type { RegisterDto } from '../models/RegisterDto';
import type { SimplePrincipal } from '../models/SimplePrincipal';
import type { UserDto } from '../models/UserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @param requestBody
     * @returns string Success
     * @throws ApiError
     */
    public static postApiAuthRegister(
        requestBody?: RegisterDto,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns string Success
     * @throws ApiError
     */
    public static postApiAuthLogin(
        requestBody?: LoginDto,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns SimplePrincipal Success
     * @throws ApiError
     */
    public static getApiAuthValidateToken(): CancelablePromise<SimplePrincipal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/validate-token',
        });
    }
    /**
     * @returns JwtSecurityToken Success
     * @throws ApiError
     */
    public static getApiAuthRefreshToken(): CancelablePromise<JwtSecurityToken> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/refresh-token',
        });
    }
    /**
     * @returns UserDto Success
     * @throws ApiError
     */
    public static getApiAuthMe(): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/me',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAuthChangePassword(
        requestBody?: ChangePasswordDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/change-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAuthChangeEmail(
        requestBody?: ChangeEmailDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/change-email',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
