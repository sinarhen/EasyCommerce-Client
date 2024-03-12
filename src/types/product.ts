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


export interface ProductCategoryDto {
  id: string;
  name: string;
  order: number;
}