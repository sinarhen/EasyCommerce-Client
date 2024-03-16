import {IdNameDto} from "@/types/shared";

export interface ProductDto {
  id: string;
  categories: ProductCategoryDto[];
  name: string;
  description: string;
  discount: number | null;
  occasion: IdNameDto;
  collection: IdNameDto;
  mainMaterial: IdNameDto;
  gender: string;
  season: string;
  ordersCount: number;
  reviewsCount: number;
  avgRating: number;
  minPrice: number;
  isNew: boolean;
  isOnSale: boolean;
  isAvailable: boolean;
  isBestseller: boolean;
  colors: ColorDto[];
  images: ProductImageDto[];
}

export interface ProductImageDto {
  colorId: string;
  imageUrls: string[];
}

export interface ColorDto {
  id: string;
  name: string;
  hexCode: string;
}

export enum ProductsOrderBy
{
  price,
  priceDesc,
  name,
  nameDesc,
  newest,
  oldest,
  bestseller,
  default
}
export interface ProductsSearchParams {
  productId?: string;
  orderBy?: ProductsOrderBy;
  filterBy?: string;
  pageSize?: number;
  pageNumber?: number;
  searchTerm?: string;
  categoryId?: string[];
  colorId?: string[];
  sizeId?: string[];
  collectionId?: string[];
  materialId?: string[];
  occasionId?: string[];
  minPrice?: number;
  maxPrice?: number;
}


export interface ProductCategoryDto {
  id: string;
  name: string;
  order: number;
}

export interface CategoryDto {
  id: string;
  name: string;
  imageUrl: string;
  subCategories?: CategoryDto[];
}