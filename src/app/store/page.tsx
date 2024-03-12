import Header from "@/components/ui/header";
import {Backpack, Filter, PersonStanding, ShoppingCart, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";
import {iconSizes} from "@/lib/constants";
import ProductCard from "@/components/ui/product-card";

export default function Store() {
  return (
    <div className='w-full '>
        <Header>
          Products
        </Header>

      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 " />
      <Button size={"xs"}>
        <Filter size={iconSizes.sm}/>
        Filter
      </Button>

      <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

      </div>
    </div>
  );
}