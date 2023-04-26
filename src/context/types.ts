import  React from "react";
import { IUser } from "../types/user";

export interface IAuthContext {
    user:IUser;
    handleLogin: (LoginData: ILoginData) => Promise<void>;
    handleSingOut:() => void

}

export interface IAuthContextProviderPros{
    children:React.ReactNode;
}

export interface ILoginData {
    email: string;
    password:string;
}