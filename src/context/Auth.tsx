import { createContext, useState } from "react";
import {IAuthContextProviderPros, IAuthContext, ILoginData} from './types'
import { IUser } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";


export const AuthContext = createContext<IAuthContext>({} as IAuthContext); 

export const AuthContextProvider = ({children}:IAuthContextProviderPros )=> {
    
    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const handleLogin = async (LoginData: ILoginData) => {
        try{
            const {data } = await api.get(`users?email=${LoginData.email}&password=${LoginData.password}`)
            if(data.length === 1){

              setUser(data[0])
              navigate('/feed')
            }else {
              alert('Email ou senha inválido!')
            }
          }catch{
            alert('Houve um erro, espere um pouco e depois tente novamente.')
        }

    }

    const handleSingOut = () => {
      setUser({} as  IUser)
    }

    return(
        <AuthContext.Provider value={{user, handleLogin, handleSingOut}}>{children}</AuthContext.Provider>
    )
}