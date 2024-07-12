/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Color } from './Color';
import type { Order } from './Order';
import type { OrderItemStatus } from './OrderItemStatus';
import type { Product } from './Product';
import type { Size } from './Size';
export type OrderItem = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    orderId?: string;
    productId?: string;
    colorId?: string;
    quantity?: number;
    sizeId?: string;
    status?: OrderItemStatus;
    color?: Color;
    product?: Product;
    order?: Order;
    size?: Size;
};

