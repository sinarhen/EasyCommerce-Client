import {ProductService} from "@/lib/_api/client";
import {FiltersSheet} from "@/app/store/components/filters/filtersSheet";

export default async function Filters(){
  const filters = await ProductService.getApiProductsFilters().catch(err => console.error(err))

  return (
    <>
      <FiltersSheet filters={{...filters}}/>
    </>
  )

}