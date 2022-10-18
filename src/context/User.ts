import {createContext} from 'react'
type UserContextType = {
    username:string,
    email:string
}

export const UserContext = createContext({} as UserContextType)