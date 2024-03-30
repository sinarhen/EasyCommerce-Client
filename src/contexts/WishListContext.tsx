'use client';

import React, {useCallback} from "react";
import {toast} from "react-hot-toast";

type WishListContextType = {
    wishList: string[],
    toggleWish: (productId: string) => void;
};

export const WishListContext = React.createContext<null | WishListContextType>(null);


export function WishListProvider({children}: {children: React.ReactNode}) {
    const [wishList, setWishList] = React.useState<string[]>(() => {
        return JSON.parse(localStorage.getItem("wishlist") || "[]");
    });

    const toggleWish = useCallback((productId: string) => {
        if (wishList.includes(productId)) {
            localStorage.setItem("wishlist", JSON.stringify(wishList.filter(w => w !== productId)));
            setWishList(wishList.filter(w => w !== productId));
            toast.success("Removed from wishlist");
        } else {
            localStorage.setItem("wishlist", JSON.stringify([...wishList, productId]));
            setWishList([...wishList, productId]);
            toast.success("Added to wishlist");
        }
    }, [wishList]);

    return (
        <WishListContext.Provider value={{wishList, toggleWish}}>
            {children}
        </WishListContext.Provider>
    );
}