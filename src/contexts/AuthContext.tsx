import React from 'react'
import {TUser} from "@/types/user";
import Cookie from 'js-cookie'
import {getCurrentUser} from "@/actions/auth";

interface AuthContextProps {
  user: TUser | null;
  setUser: (user: TUser | null) => void;

}


export const AuthContext = React.createContext<null | AuthContextProps>(null);


export const AuthProvider = ({children}: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<TUser | null>(null);

  const token = Cookie.get("token");

  React.useEffect(() => {
    if (token) {
      getCurrentUser(token).then((resp) => {
        if (resp?.success) {
          setUser(resp.data);
        } else {
          console.error(resp?.statusText);
          setUser(null);

        }
      });
    } else {
      setUser(null)
    }
  }, [token, setUser]);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}
