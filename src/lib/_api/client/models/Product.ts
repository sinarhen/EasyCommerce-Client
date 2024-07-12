/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collection } from './Collection';
import type { Gender } from './Gender';
import type { Occasion } from './Occasion';
import type { OrderItem } from './OrderItem';
import type { ProductCategory } from './ProductCategory';
import type { ProductImage } from './ProductImage';
import type { ProductMaterial } from './ProductMaterial';
import type { ProductStock } from './ProductStock';
import type { Review } from './Review';
import type { Season } from './Season';
import type { User } from './User';
import type { Wishlist } from './Wishlist';
export type Product = {
    createdAt?: string;
    updatedAt?: string | null;
    id?: string;
    name: string;
    description?: string | null;
    occasionId?: string | null;
    sizeChartImageUrl?: string | null;
    gender?: Gender;
    season?: Season;
    sellerId?: string | null;
    collectionId?: string | null;
    occasion?: Occasion;
    collection?: Collection;
    seller?: User;
    materials?: Array<ProductMaterial> | null;
    images?: Array<ProductImage> | null;
    stocks?: Array<ProductStock> | null;
    reviews: Array<Review>;
    orders?: Array<OrderItem> | null;
    categories?: Array<ProductCategory> | null;
    wishlists?: Array<Wishlist> | null;
};

