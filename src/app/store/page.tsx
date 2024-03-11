import Header from "@/components/ui/header";
import apiFetcher from "@/actions/api";
import {Filter} from "lucide-react";
import {Button} from "@/components/ui/button";
import {iconSizes} from "@/lib/constants";

export default function Store() {
  return (
    <div className='w-full'>
        <Header>
          Products
        </Header>

      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 " />
      <Button size={"xs"}>
        <Filter size={iconSizes.sm}/>
        Filter
      </Button>
      <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-md shadow-md p-4">
          <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover rounded-md"/>
          <h3 className="text-lg font-semibold mt-2">Product Name</h3>
          <p className="text-gray-500 mt-1">Product Description</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-semibold">$100</span>
            <Button size={"xs"}>Add to Cart</Button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover rounded-md"/>
          <h3 className="text-lg font-semibold mt-2">Product Name</h3>
          <p className="text-gray-500 mt-1">Product Description</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-semibold">$100</span>
            <Button size={"xs"}>Add to Cart</Button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover rounded-md"/>
          <h3 className="text-lg font-semibold mt-2">Product Name</h3>
          <p className="text-gray-500 mt-1">Product Description</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-semibold">$100</span>
            <Button size={"xs"}>Add to Cart</Button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover rounded-md"/>
          <h3 className="text-lg font-semibold mt-2">Product Name</h3>
          <p className="text-gray-500 mt-1">Product Description</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-semibold">$100</span>
            <Button size={"xs"}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}