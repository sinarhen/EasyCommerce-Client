/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SellerInfo } from './SellerInfo';
import type { SellerUpgradeRequestStatus } from './SellerUpgradeRequestStatus';
import type { User } from './User';
export type SellerUpgradeRequest = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    userId?: string | null;
    status?: SellerUpgradeRequestStatus;
    message?: string | null;
    decidedAt?: string | null;
    sellerInfoId?: string;
    sellerInfo?: SellerInfo;
    user?: User;
};

