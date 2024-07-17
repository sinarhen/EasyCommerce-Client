import React from "react";

export function FilterSectionGroup({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <div className="mt-2 gap-y-2 flex flex-col">
      {children}
    </div>
  )
}