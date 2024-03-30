import {IdNameDto} from "@/types/shared";
import {TUser} from "@/types/user";

export interface ProductDetailsDto extends ProductDto {
  sizes: SizeDto[];
  reviews: ReviewDto[];
  materials: MaterialDto[];
  sizeChartImageUrl: string;
  stocks: StockDto[];
}

enum Rating {
  noRating = 0,
  terrible = 1,
  bad = 2,
  average = 3,
  good = 4,
  excellent = 5
}

export interface ReviewDto {
  id: string;
  user: TUser;
  title: string;
  content: string;
  rating: Rating;
  createdAt: string;

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
  // mainMaterial: IdNameDto;
  gender: string;
  season: Season;
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

export type Season = 'winter' | 'spring' | 'summer' | 'autumn';


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
  colors?: IdNameDto[]; // We need to store color names as well to user-friendly display selected colors
  sizes?: IdNameDto[]; // We need to store size names as well to user-friendly display selected sizes
  collections?: IdNameDto[]; // We need to store names as well to user-friendly display selected collections
  materials?: IdNameDto[]; // We need to store material names as well to user-friendly display selected materials
  occasions?: IdNameDto[]; // We need to store names as well to user-friendly display selected occasions
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