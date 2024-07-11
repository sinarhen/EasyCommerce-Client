import CategoriesWrapper from "@/components/ui/categories-wrapper";
import CategoryCardSkeleton from "@/components/ui/skeletons/category-card-skeleton";
import React from "react";

export default function CategoriesSectionSkeleton(){
  return (
    <CategoriesWrapper>
      <CategoryCardSkeleton/>
      <CategoryCardSkeleton/>
      <CategoryCardSkeleton/>
      <CategoryCardSkeleton/>
    </CategoriesWrapper>
  )
}