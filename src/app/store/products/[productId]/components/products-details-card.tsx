'use client'


import {ColorDto, ProductDetailsDto, ProductImageDto, SizeDto} from "@/types/product";
import {Header1} from "@/components/ui/header";
import {Button} from "@/components/ui/button";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import ImageFrame from "@/components/ui/image-frame";
import {Bookmark, Ruler, ShoppingCart} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import {InformationList} from "@/app/store/products/[productId]/components/information-list";
import {SizeSelection} from "@/app/store/products/[productId]/components/size-selection";
import {ColorSelection} from "@/app/store/products/[productId]/components/color-selection";
import useWishlist from "@/hooks/use-wishlist";


export default function ProductDetailsCard({
                                             product
                                           }: {
  product: ProductDetailsDto
}) {
  const [selectedColor, setSelectedColor] = useState<ColorDto | undefined>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<SizeDto | null>(null);
  const [selectedImages, setSelectedImages] = useState<ProductImageDto | undefined>();

  const {toggleWish, wishList} = useWishlist();

  const inWishlist = wishList.hasOwnProperty(product.id) ? wishList[product.id] : product.isFavorite;
  const selectedStock = useMemo(() => product.stocks.find(stock => stock.colorId === selectedColor?.id && stock.sizeId === selectedSize?.id), [selectedColor, selectedSize]);

  useEffect(() =>
    setSelectedImages(product.images.find(pi => pi.colorId == selectedColor?.id)),
    [product.images, selectedColor]);

  const stockForSize = useCallback((sizeId: string) => product.stocks.find(stock => stock.colorId === selectedColor?.id && stock.sizeId === sizeId), [selectedColor?.id]);

  return (
    <div
    className="w-full grid lg:gap-x-16 md:gap-x-12  gap-y-2 grid-cols-1 md:grid-cols-2  ">
      <div className="gap-y-1.5 row-span-2 flex items-center md:items-start flex-col">
        <div className="w-3/4 md:w-full">
          <ImageFrame
            className="group-hover:scale-125 transition-transform"
            src={selectedImages?.imageUrls[0] ?? ""}/>
        </div>
        <div className="md:flex hidden w-full h-full gap-x-1">
          {selectedImages?.imageUrls.map((image, index) => (
            <div key={index} className="w-1/4">
              <ImageFrame src={image}/>
            </div>
          ))}
        </div>

      </div>
      <div className="flex row-span-3 flex-col  md:h-full md:justify-between w-full">
        <div>
          <div className="flex  justify-center items-center md:justify-between gap-x-2">
            <p className="justify-center md:justify-start flex gap-x-1">
              {product.categories.map((category, index) => (
                <span key={index} className="text-gray-400">{category.name} </span>
              ))}
            </p>
            <Button
              onClick={() => toggleWish(product.id, product.isFavorite)}
              variant='ghost'
              size="sm">
              <Bookmark fill={inWishlist ? "black" : "white"} size={iconSizes.md}/>
            </Button>
          </div>
          <Header1>
            {product.name.split(" ").slice(0, -1).join(" ") + " "}

            <span className="animate-gradient text-gradient">
              {product.name.split(" ").slice(-1)}
            </span>
          </Header1>
          <div className='mt-4 mb-3  items-center md:items-start flex flex-col sm:my-4'>
            <ColorSelection
              colors={product.colors}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>
          <InformationList {...product}/>

          <hr className="h-px mb-3 mt-2 bg-gray-200 opacity-90 rounded-full bg-gradient animate-gradient border-0 "/>
          <div className="mb-2 flex w-full justify-center md:justify-start text-sm text-gray-400">

            <Button
              size={"xs"}
              variant="ghost"
              className="flex gap-x-1 items-center"
            >
              <Ruler size={iconSizes.sm}/>
              Size guide
            </Button>
          </div>
          <SizeSelection
            sizes={product.sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            stockForSize={stockForSize}
          />
          <div className="flex md:flex-row md:mt-6 flex-col-reverse md:items-end justify-between gap-x-2">
            <div className="flex items-center flex-col gap-y-1 md:flex-row">
              <Button
                size={"sm"}
                className="w-full flex items-center gap-x-1 md:w-auto">
                <ShoppingCart size={iconSizes.sm}/>
                Buy
              </Button>
              {selectedSize && selectedColor ? (
                <div className="text-xs flex items-center gap-x-1 ml-2">
                  <span>
                    Size {selectedSize?.name}
                  </span>
                  <span className="h-1 w-1 rounded-full dark:bg-white bg-black "></span>
                  <span>
                    Color {selectedColor?.name}
                  </span>

                </div>
              ) : null}

            </div>
            <div className="flex text-lg items-end justify-center sm:my-6 my-7 h-full md:my-0 gap-x-1 text-gray-400">
              {!selectedStock && "Starting from "}
              <div>
                <span
                  className="flex md:flex-row-reverse justify-center items-center gap-x-2 text-2xl sm:text-3xl md:text-xl animate-gradient"
                >
                  <div className="relative">
                    <span className={`text-gradient animate-gradient`}>
                      ${selectedStock?.price ? (selectedStock.discount ? selectedStock.price * selectedStock.discount : selectedStock.price) : product.minPrice}
                    </span>
                    {selectedStock?.discount ? (
                      <span className="text-red-500  -right-6 -top-2 absolute rounded text-sm">
                        -{selectedStock.discount * 100}%
                      </span>
                    ) : null}

                  </div>
                  {selectedStock?.discount && selectedStock?.discount > 0 ? (
                    <span className="text-lg sm:text-sm md:text-lg line-through text-gray-400">
                      ${selectedStock?.price}</span>
                  ) : null}

                </span>

              </div>

            </div>

          </div>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

// const ColorSelection = ({colors, selectedColor, setSelectedColor}) => (
//   <div className="flex gap-x-1.5 md:gap-x-1 ">
//     {colors.map((color, index) => (
//       <button onClick={() => setSelectedColor(color)} key={index}
//               className={`w-12 h-12 sm:h-10 sm:w-10  border transition-all rounded-full ${selectedColor?.id === color.id ? "border-black dark:border-white" : "border-gray-400"}`}
//               style={{backgroundColor: color.hexCode}}></button>
//     ))}
//   </div>
// );
//
// const SizeSelection = ({sizes, selectedSize, setSelectedSize, stockForSize}) => (
//   <div className={"flex w-full justify-center md:justify-start overflow-auto gap-x-1"}>
//     {sizes.sort((a, b) => a.value > b.value ? 1 : -1).map((size, index) => {
//       const stock = stockForSize(size.id);
//       return (
//         <div key={stock?.colorId! + stock?.sizeId!} className="flex flex-col gap-y-1">
//           <Button
//             disabled={stock?.price === 0}
//             onClick={() => setSelectedSize(size)} variant="ghost"
//             className={`w-14 h-14 border relative flex justify-between overflow-hidden transition-all flex-col ${size.id === selectedSize?.id ? "dark:border-white border-black" : ""}`}>
//             {(stock?.discount && stock?.discount > 0) ? (
//               <div className="absolute bg-red-500 rounded text-[9px] right-0 text-center -top-1 h-4 w-4">
//                 %
//               </div>
//             ) : null}
//             <div>
//               {size.name}
//             </div>
//             <div className={`${stock?.discount !== 0 ? "text-[10px] line-through " : "text-xs"} text-gray-400`}>
//               {stock?.price ? "$ " + stock?.price : "N/A"}
//             </div>
//           </Button>
//         </div>
//       )
//     })}
//   </div>
// );
//
// export default function ProductDetailsCard({ product }: { product: ProductDetailsDto }) {
//   const [selectedColor, setSelectedColor] = useState<ColorDto | undefined>(product.colors[0]);
//   const [selectedSize, setSelectedSize] = useState<SizeDto | null>(null);
//   const selectedStock = useMemo(() => product.stocks.find(stock => stock.colorId === selectedColor?.id && stock.sizeId === selectedSize?.id), [selectedColor, selectedSize]);
//   const [selectedImages, setSelectedImages] = useState<ProductImageDto | undefined>();
//   useEffect(() => setSelectedImages(product.images.find(pi => pi.colorId == selectedColor?.id)), [product.images, selectedColor]);
//   const stockForSize = useCallback((sizeId: string) => product.stocks.find(stock => stock.colorId === selectedColor?.id && stock.sizeId === sizeId), [selectedColor?.id]);
//
//   return (
//     <div className="w-full grid lg:gap-x-16 md:gap-x-12  gap-y-2 grid-cols-1 md:grid-cols-2  ">
//       <div className="gap-y-1.5 row-span-2 flex items-center md:items-start flex-col">
//         <div className="w-3/4 md:w-full">
//           <ImageFrame className="group-hover:scale-125 transition-transform" src={selectedImages?.imageUrls[0] ?? ""}/>
//         </div>
//         <div className="md:flex hidden w-full h-full gap-x-1">
//           {selectedImages?.imageUrls.map((image, index) => (
//             <div key={index} className="w-1/4">
//               <ImageFrame src={image}/>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex row-span-3 flex-col  md:h-full md:justify-between w-full">
//         <div>
//           <p className="justify-center md:justify-start flex gap-x-1">
//             {product.categories.map((category, index) => (
//               <span key={index} className="text-gray-400">{category.name} </span>
//             ))}
//           </p>
//           <Header1>
//             {product.name.split(" ").slice(0, -1).join(" ") + " "}
//             <span className="animate-gradient text-gradient">
//               {product.name.split(" ").slice(-1)}
//             </span>
//           </Header1>
//           <div className='mt-4 mb-3  items-center md:items-start flex flex-col sm:my-4'>
//             <ColorSelection colors={product.colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
//           </div>
//           <InformationList {...product}/>
//           <hr className="h-px mb-3 mt-2 bg-gray-200 opacity-90 rounded-full bg-gradient animate-gradient border-0 "/>
//           <div className="mb-2 flex w-full justify-center md:justify-start text-sm text-gray-400">
//             <Button size={"xs"} variant="ghost" className="flex gap-x-1 items-center">
//               <Ruler size={iconSizes.sm}/>
//               Size guide
//             </Button>
//           </div>
//           <SizeSelection sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} stockForSize={stockForSize} />
//           {/* ... rest of the component code ... */}
//         </div>
//         <div>
//           {/* ... rest of the component code ... */}
//         </div>
//       </div>
//     </div>
//   )
// }