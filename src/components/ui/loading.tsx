const sizes = {
  "xs": "w-4 h-4",
  "sm": "w-6 h-6",
  "md": "w-8 h-8",
  "lg": "w-10 h-10",
  "xl": "w-12 h-12",

}
export default function Loading() {
  return (
    <div
      className="w-6 h-6 rounded-full animate-spin border border-dashed border-white border-t-transparent">

    </div>

  )
}