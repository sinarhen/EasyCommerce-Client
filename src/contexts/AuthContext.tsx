import React from 'react'
import Cookie from 'js-cookie'
import {getCurrentUser} from "@/actions/auth";
import {tokenKeyString} from "@/lib/constants";
import {UserDto} from "@/lib/_api/client";

interface AuthContextProps {
  user?: UserDto;
  setUser: (user?: UserDto) => void;

}


export const AuthContext = React.createContext<null | AuthContextProps>(null);


export const AuthProvider = ({children, initialUser}: { children: React.ReactNode, initialUser?: UserDto }) => {
  const [user, setUser] = React.useState<UserDto | undefined >(initialUser);

  const token = Cookie.get(tokenKeyString);

  React.useEffect(() => {
    if (token && initialUser !== user) {
      getCurrentUser().then((resp) => {
          setUser(resp);
        }).catch(() => {
          setUser(undefined);
        });
    }}, [token]);
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}
