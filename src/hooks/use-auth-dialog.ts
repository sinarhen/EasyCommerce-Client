import {useContext} from "react";
import {AuthDialogContext} from "@/contexts/AuthDialogContext";

export function useAuthDialog(){
  const authDialog = useContext(AuthDialogContext);
  if(!authDialog){
    throw new Error("useAuthDialog must be used within a AuthDialogProvider");
  }
  return authDialog;
}