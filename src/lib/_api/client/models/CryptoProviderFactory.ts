/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CryptoProviderCache } from './CryptoProviderCache';
import type { ICryptoProvider } from './ICryptoProvider';
export type CryptoProviderFactory = {
    cryptoProviderCache?: CryptoProviderCache;
    customCryptoProvider?: ICryptoProvider;
    cacheSignatureProviders?: boolean;
    signatureProviderObjectPoolCacheSize?: number;
};

