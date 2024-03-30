import React, {useCallback} from "react";

type WishListContextType = {
    wishList: string[],
    toggleWish: (productId: string) => void
};

export const WishListContext = React.createContext<null | WishListContextType>(null);


export function WishListProvider({children}: {children: React.ReactNode}) {
    const [wishList, setWishList] = React.useState<string[]>(() => {
        return JSON.parse(localStorage.getItem("wishlist") || "[]");
    });

    const toggleWish = useCallback((productId: string) => {
        if (wishList.includes(productId)) {
            setWishList(wishList.filter(w => w !== productId));
        } else {
            setWishList([...wishList, productId]);
        }
    }, [wishList]);

    return (
        <WishListContext.Provider value={{wishList, toggleWish}}>
            {children}
        </WishListContext.Provider>
    );
}