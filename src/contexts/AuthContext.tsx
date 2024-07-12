import React from 'react'
import Cookie from 'js-cookie'
import {getCurrenUserDto} from "@/actions/auth";
import {tokenKeyString} from "@/lib/constants";
import {UserDto} from "@/lib/_api/client";

interface AuthContextProps {
  user?: UserDto;
  seUserDto: (user?: UserDto) => void;

}


export const AuthContext = React.createContext<null | AuthContextProps>(null);


export const AuthProvider = ({children, initialUser}: { children: React.ReactNode, initialUser?: UserDto }) => {
  const [user, seUserDto] = React.useState<UserDto | undefined >(initialUser);

  const token = Cookie.get(tokenKeyString);

  React.useEffect(() => {
    if (token && initialUser !== user) {
      getCurrenUserDto().then((resp) => {
          seUserDto(resp);
        }).catch(() => {
          seUserDto(undefined);
        });
    }}, [token]);
  return (
    <AuthContext.Provider value={{user, seUserDto}}>
      {children}
    </AuthContext.Provider>
  );
}
