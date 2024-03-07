import {useContext} from "react";
import {AuthContext} from "@/contexts/AuthContext";

export default function useAuth() {
  const data = useContext(AuthContext)
  if (!data) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return data;
}