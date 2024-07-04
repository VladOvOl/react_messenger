import Cookies from "js-cookie";
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";


type IAuthContext = {
  isAuth: boolean;
  addToken: (token: string) => void;
  removeToken: () => void;
}

interface IProps {
  children: React.ReactNode,
}

const initialState: IAuthContext = {
  isAuth: false,
  addToken: () => {},
  removeToken: () => {},
}

const AuthContext = createContext<IAuthContext>(initialState)

export const useAuth = () => useContext(AuthContext)



export const AuthProvider = ({children}:IProps) => {

  const [isAuth,setIsAuth] = useState(!!Cookies.get('token'))

  const addToken = (token:string) => {
    Cookies.set('token', token, { expires: 7, secure: true });
    setIsAuth(true)
  }

  const removeToken = () => {
    Cookies.set('token', '', {secure: true });
    setIsAuth(false)
  }



  const value = {
    isAuth,
    addToken,
    removeToken
  }
  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}