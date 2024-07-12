/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CryptoProviderFactory } from './CryptoProviderFactory';
import type { SecurityKey } from './SecurityKey';
export type EncryptingCredentials = {
    alg?: string | null;
    enc?: string | null;
    cryptoProviderFactory?: CryptoProviderFactory;
    key?: SecurityKey;
};

