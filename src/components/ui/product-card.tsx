import {ProductDto} from "@/types/product";
import {Button} from "@/components/ui/button";

export default function ProductCard({
  product,
                                    }: {
  product: ProductDto
}) {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover rounded-md"/>
      <h3 className="text-lg font-semibold mt-2">Product Name</h3>
      <p className="text-gray-500 mt-1">Product Description</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-semibold">$100</span>
        <Button size={"xs"}>Add to Cart</Button>
      </div>
    </div>

  )
}