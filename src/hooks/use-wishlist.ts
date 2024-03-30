import React from "react";
import {WishListContext} from "@/contexts/WishListContext";

export default function useWishlist(){
  const context = React.useContext(WishListContext);
  if (!context){
    throw new Error("useWishlist must be used within a WishListProvider");
  }
  return context;
}