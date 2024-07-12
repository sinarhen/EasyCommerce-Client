/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from './OrderItem';
import type { OrderStatus } from './OrderStatus';
import type { User } from './User';
export type Order = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    customerId?: string | null;
    status?: OrderStatus;
    customer?: User;
    orderItems?: Array<OrderItem> | null;
};

