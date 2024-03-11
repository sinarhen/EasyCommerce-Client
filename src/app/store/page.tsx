import Header from "@/components/ui/header";
import apiFetcher from "@/actions/api";

export default function Store() {

  const products = apiFetcher("GET", "/products")
  console.log(products)
  return (
    <div className='w-full'>

      <Header>
        Products
      </Header>
      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 " />

    </div>
  );
}