import React from "react";

export default function Container({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {children}
    </div>
  );
}