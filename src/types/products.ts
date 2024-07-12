import {
  Category,
  CategoryDto,
  CollectionDto,
  ColorDto,
  MaterialDto,
  Occasion,
  ProductsOrderBy,
  SizeDto
} from "@/lib/_api/client";

export interface ProductsSearchParams {
  productId?: string,
  orderBy?: ProductsOrderBy,
  filterBy?: string,
  pageSize?: number,
  pageNumber?: number,
  searchTerm?: string,
  categoryId?: string,
  colorId?: string,
  sizeId?: string,
  collectionId?: string,
  materialId?: string,
  occasionId?: string,
  minPrice?: number,
  maxPrice?: number,
}
