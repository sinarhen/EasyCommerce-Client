export function ProductCardSkeleton() {
  return (
    <div className="relative">
      <div className="bg-white w-full flex-col flex h-full rounded-sm drop-shadow-lg">
        <div
          className="relative group sm:min-h-[300px] min-h-[450px] overflow-hidden w-full bg-gray-300 animate-pulse"></div>
        <div className="flex mt-3 px-4 items-center w-full justify-between">
          <div className=" bg-gray-300 animate-pulse w-1/2 h-9 rounded-3xl"></div>
          <div className="w-1/2 flex  justify-end gap-x-2">
            <div className=" bg-gray-300 rounded-3xl animate-pulse w-1/3 h-4"></div>
            <div className=" bg-gray-300 rounded-3xl animate-pulse w-1/3 h-4"></div>

          </div>

        </div>
        <hr className="h-px my-1"/>
        <div className="justify-self-end px-4 flex justify-between items-center">
          <span className="bg-gray-300 animate-pulse w-[16%] sm:w-1/4 rounded-3xl h-8"></span>
          <span className="bg-gray-300 animate-pulse w-1/6 rounded-md h-7 sm:w-1/4 md:w-1/3"></span>

        </div>
        <div className="px-4 w-full flex justify-start">
          <div className="flex overflow-x-auto w-full mt-2 gap-x-1">
            <div
              className="bg-gray-300 animate-pulse sm:w-6 w-10 h-10 sm:h-6 border border-gray-300 rounded-full"></div>
            <div
              className="bg-gray-300 animate-pulse sm:w-6 w-10 h-10 sm:h-6 border border-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="w-full pb-4 px-4 mt-3 bg-white justify-between flex gap-y-2 flex-col">
          <div className="flex justify-between">
            <span className="bg-gray-300 animate-pulse rounded-3xl w-1/5 h-4"></span>
            <span className="bg-gray-300 animate-pulse rounded-3xl w-1/5 h-4"></span>
          </div>
          <div className="flex justify-between">
            <span className="bg-gray-300 animate-pulse rounded-3xl w-1/5 h-4"></span>
            <span className="bg-gray-300 animate-pulse rounded-3xl w-1/4 h-4"></span>
          </div>
          <div className="flex justify-between">
            <span className="bg-gray-300 animate-pulse rounded-3xl w-1/4 h-4"></span>
            <span className="bg-gray-300 animate-pulse rounded-3xl w-1/3 h-4"></span>
          </div>
        </div>
      </div>
    </div>
  )
}