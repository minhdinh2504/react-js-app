import { useContext, createContext, useState } from 'react'
import { IUser } from '../interfaces';

type UserContextType = {
  user?: IUser,
  setUser: (user: IUser) => void
}

const defaultUser = JSON.parse(localStorage.getItem("user") ?? "{}") as IUser

const UserContext = createContext<UserContextType | null>(null);

type UserProviderProps = {
  children: React.ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser>(defaultUser)
  return <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>
}

export default UserContext;
