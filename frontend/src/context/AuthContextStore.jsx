import { createContext, useContext, useState } from "react";

const AuthContextStore = createContext();

export const useAuthContext = () => {
    return useContext(AuthContextStore);
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("userInfo")) || null);

    return <AuthContextStore.Provider value={{ authUser, setAuthUser }}>{children}</AuthContextStore.Provider>
}