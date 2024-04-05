import React, {useCallback} from "react";
import {toast} from "react-hot-toast";
import useAuth from "@/hooks/use-auth";
import {useAuthDialog} from "@/hooks/use-auth-dialog";
import {addWish, removeWish} from "@/actions/products";
import Cookie from "js-cookie";

type WishListContextType = {
    wishList: Record<string, boolean>,
    toggleWish: (productId: string, isInitialWished: boolean) => void;
};

export const WishListContext = React.createContext<null | WishListContextType>(null);


export function WishListProvider({children}: {children: React.ReactNode}) {
    const {user} = useAuth();
    const {setOpen, setVariant} = useAuthDialog();
    const [wishList, setWishList] = React.useState<Record<string, boolean>>({});
    const token = Cookie.get("token")
    const toggleWish = useCallback((productId: string, isInitialWished: boolean = false) => {
        if (!user || !token){
            setOpen(true);
            setVariant("login");
            toast.error("You need to login to add to wishlist");
            return;
        }
        if (wishList.hasOwnProperty(productId) ? wishList[productId] : isInitialWished) {
            removeWish(productId, token);
            setWishList(prevWishList => ({...prevWishList, [productId]: false}));
            toast.success("Removed from wishlist");
        } else {
            addWish(productId, token)
            setWishList(prevWishList => ({...prevWishList, [productId]: true}));
            toast.success("Added to wishlist");
        }
    }, [setOpen, setVariant, token, user, wishList]);

    return (
        <WishListContext.Provider value={{wishList, toggleWish}}>
            {children}
        </WishListContext.Provider>
    );
}