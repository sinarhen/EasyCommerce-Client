/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BannedUser } from './BannedUser';
import type { Order } from './Order';
import type { Review } from './Review';
import type { SellerInfo } from './SellerInfo';
import type { SellerUpgradeRequest } from './SellerUpgradeRequest';
import type { Store } from './Store';
export type User = {
    id?: string | null;
    userName?: string | null;
    normalizedUserName?: string | null;
    email?: string | null;
    normalizedEmail?: string | null;
    emailConfirmed?: boolean;
    passwordHash?: string | null;
    securityStamp?: string | null;
    concurrencyStamp?: string | null;
    phoneNumber?: string | null;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: string | null;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
    firstName?: string | null;
    lastName?: string | null;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    postalCode?: string | null;
    imageUrl?: string | null;
    cartId?: string | null;
    createdAt?: string;
    updatedAt?: string;
    sellerInfoId?: string | null;
    sellerInfo?: SellerInfo;
    bannedUser?: BannedUser;
    requests?: Array<SellerUpgradeRequest> | null;
    reviews?: Array<Review> | null;
    orders?: Array<Order> | null;
    stores?: Array<Store> | null;
};

