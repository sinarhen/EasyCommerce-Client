import React, {useCallback, useMemo} from "react";

type WishListContextType = {
    wishList: string[],
    toggleWish: (productId: string) => void;
    isWished: (productId: string) => boolean;
};

export const WishListContext = React.createContext<null | WishListContextType>(null);


export function WishListProvider({children}: {children: React.ReactNode}) {
    const [wishList, setWishList] = React.useState<string[]>(() => {
        return JSON.parse(localStorage.getItem("wishlist") || "[]");
    });

    const isWished = useMemo(() => (productId: string) => wishList.includes(productId), [wishList]);
    const toggleWish = useCallback((productId: string) => {
        if (wishList.includes(productId)) {
            localStorage.setItem("wishlist", JSON.stringify(wishList.filter(w => w !== productId)));
            setWishList(wishList.filter(w => w !== productId));
        } else {
            localStorage.setItem("wishlist", JSON.stringify([...wishList, productId]));
            setWishList([...wishList, productId]);
        }
    }, [wishList]);

    return (
        <WishListContext.Provider value={{wishList, toggleWish, isWished}}>
            {children}
        </WishListContext.Provider>
    );
}