import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null); //state to store the current socket in frontend
    const [onlineUsers, setOnlineUsers] = useState([]); //state to store the current online users

    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            //create a new socket connection and connect to backend
            const socket = io("http://localhost:8000", {
                query: {
                    authUserId: authUser._id //passing query to the backend about current logged in user
                }
            });
            setSocket(socket);


            //listening to getOnlineUsers event fired from backend and get the uers passed through this event
            socket.on("getOnlineUsers", (users) => {
                console.log("going");
                
                setOnlineUsers(users)}
            );

            return () => socket?.close();
        } else {
            if (socket) {
                //close the connection if there is no logged in user
                socket.close();
                setSocket(null);
            }
        }

    }, [authUser])


    return (<SocketContext.Provider value={{ socket, onlineUsers }}>
        {children}
    </SocketContext.Provider>
    );
}