import {cn} from "@/lib/utils";

export default function ProductsWrapper({
  children,
  className

                                        }: {
  children: React.ReactNode,
  className: string
}){
  return (
    <div className={cn("grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5", className)}>
      {children}
    </div>
  )
}