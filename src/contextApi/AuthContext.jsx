import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthUser = ({ children }) => {
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')

    const ls = typeof window !== 'undefined' ? window.localStorage : null
    useEffect(() => {
        if (ls && ls.getItem('user') && ls.getItem('X_auth_token')) {
            const localToken = ls.getItem('X_auth_token')
            setToken(localToken)
            let localUser = ls.getItem('user')
            localUser = JSON.parse(localUser)
            setUser(localUser)
        }
    }, [])
    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthUser