import { createContext, useContext, useEffect, useState } from "react";
import io from 'socket.io-client'
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUser, setOnlineUser] = useState([])
    const { token, user } = useContext(AuthContext)

    useEffect(() => {
        if (token && token.length > 10) {
            const socketContect = io('http://localhost:8000', {
                transports: ['websocket'],
                query: {
                    userId: user._id,
                }
            })

            setSocket(socketContect)
            // socket.on() is used to listen to the events. can be used both on client and server side
            socketContect.on('getOnlineUser', (users) => {
                console.log(users);
                setOnlineUser(users)
            })
            return () => socketContect.close()
        } else {
            if (socket) {
                socket?.close()
                setSocket(null)
            }
        }
    }, [token])

    return (
        <SocketContext.Provider value={{ socket, onlineUser }}>{children}</SocketContext.Provider>
    )
}