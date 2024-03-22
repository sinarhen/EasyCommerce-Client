import {IdNameDto} from "@/types/shared";

export interface ProductDetailsDto extends ProductDto {
  sizes: SizeDto[];
  reviews: ReviewDto[];
  materials: MaterialDto[];
  sizeChartImageUrl: string;
  stocks: StockDto[];
}

export interface StockDto {
  sizeId: string;
  colorId: string;
  stock: number;
  price: number;
  discount: number;
}

export interface ProductDto extends IdNameDto {
  categories: ProductCategoryDto[];
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

export interface ColorDto extends IdNameDto {
  id: string;
  name: string;
  hexCode: string;
}

export interface ProductsResponse {
  products: ProductDto[];
  filters: ProductFiltersDto;
  pageNumber: number;
  pageSize: number;
}

export interface ProductFiltersDto {
  colors: ColorDto[];
  sizes: SizeDto[];
  collections: IdNameDto[];
  materials: IdNameDto[];
  categories: CategoryDto[]
  occasions: OccasionDto[];
}

export interface OccasionDto extends IdNameDto {
  description: string;
}

export enum ProductsOrderBy {
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
  categories?: CategoryDto[];
  colorId?: string[];
  sizeId?: string[];
  collectionId?: string[];
  materialId?: string[];
  occasionId?: string[];
  minPrice?: number;
  maxPrice?: number;
}
export interface SizeDto extends IdNameDto {
  value: number;
}


export interface ProductCategoryDto extends IdNameDto {
  order: number;
}

export interface MaterialDto extends IdNameDto{
  percentage: number;
}

export interface CategoryDto extends IdNameDto {
  imageUrl: string;
  subCategories?: CategoryDto[];
}