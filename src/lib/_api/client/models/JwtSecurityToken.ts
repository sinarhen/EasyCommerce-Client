/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Claim } from './Claim';
import type { EncryptingCredentials } from './EncryptingCredentials';
import type { SecurityKey } from './SecurityKey';
import type { SigningCredentials } from './SigningCredentials';
export type JwtSecurityToken = {
    readonly actor?: string | null;
    readonly audiences?: Array<string> | null;
    readonly claims?: Array<Claim> | null;
    readonly encodedHeader?: string | null;
    readonly encodedPayload?: string | null;
    readonly header?: Record<string, any> | null;
    readonly id?: string | null;
    readonly issuer?: string | null;
    readonly payload?: Record<string, any> | null;
    innerToken?: JwtSecurityToken;
    readonly rawAuthenticationTag?: string | null;
    readonly rawCiphertext?: string | null;
    readonly rawData?: string | null;
    readonly rawEncryptedKey?: string | null;
    readonly rawInitializationVector?: string | null;
    readonly rawHeader?: string | null;
    readonly rawPayload?: string | null;
    readonly rawSignature?: string | null;
    securityKey?: SecurityKey;
    readonly signatureAlgorithm?: string | null;
    signingCredentials?: SigningCredentials;
    encryptingCredentials?: EncryptingCredentials;
    signingKey?: SecurityKey;
    readonly subject?: string | null;
    readonly validFrom?: string;
    readonly validTo?: string;
    readonly issuedAt?: string;
};

