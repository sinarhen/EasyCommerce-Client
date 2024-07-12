/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SellerInfo } from './SellerInfo';
import type { UserDto } from './UserDto';
export type SellerUpgradeRequestDetailsDto = {
    id?: string;
    message?: string | null;
    status: string;
    decidedAt?: string | null;
    user?: UserDto;
    createdAt?: string;
    sellerInfo?: SellerInfo;
};

