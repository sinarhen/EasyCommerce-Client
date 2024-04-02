import React, {useCallback} from "react";
import {toast} from "react-hot-toast";
import useAuth from "@/hooks/use-auth";
import {useAuthDialog} from "@/hooks/use-auth-dialog";

type WishListContextType = {
    wishList: string[],
    toggleWish: (productId: string) => void;
};

export const WishListContext = React.createContext<null | WishListContextType>(null);


export function WishListProvider({children}: {children: React.ReactNode}) {
    const {user} = useAuth();
    const {setOpen, setVariant} = useAuthDialog();
    const [wishList, setWishList] = React.useState<string[]>(() => {
        if (!user) return [];
        if (typeof window !== undefined){
            return JSON.parse(localStorage.getItem("wishlist") || "[]");
        }
    });

    const toggleWish = useCallback((productId: string) => {
        if (!user) {
            setOpen(true);
            setVariant("login");
            toast.error("You need to login to add to wishlist");
            return;
        }
        if (wishList.includes(productId)) {
            localStorage.setItem("wishlist", JSON.stringify(wishList.filter(w => w !== productId)));
            setWishList(wishList.filter(w => w !== productId));
            toast.success("Removed from wishlist");
        } else {
            localStorage.setItem("wishlist", JSON.stringify([...wishList, productId]));
            setWishList([...wishList, productId]);
            toast.success("Added to wishlist");
        }
    }, [user, wishList]);

    return (
        <WishListContext.Provider value={{wishList, toggleWish}}>
            {children}
        </WishListContext.Provider>
    );
}