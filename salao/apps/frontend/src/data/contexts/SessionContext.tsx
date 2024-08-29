'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { User } from '@salao/core'
import cookie from 'js-cookie'

interface SessionContextProps {
    loading: boolean
    token: string | null
    user: User | null
    createSession: (jwt: string) => void
    clearSession: () => void
}

const SessionContext = createContext<SessionContextProps>({} as any)

export function ProvedorSessao(props: any) {
    const nomeCookie = 'salao-authorization'

    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<User | null>(null)

    const loadingSession = useCallback(function () {
        try {
            setLoading(true)
            const estado = obterEstado()
            setToken(estado?.token ?? null)
            setUser(estado?.user ?? null)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        loadingSession()
    }, [loadingSession])

    function createSession(jwt: string) {
        cookie.set(nomeCookie, jwt, {
            expires: 1,
            sameSite: 'None',
            secure: true,
        })
        loadingSession()
    }

    function clearSession() {
        setToken(null)
        setUser(null)
        cookie.remove(nomeCookie)
    }

    function obterEstado(): { token: string; user: User } | null {
        const jwt = cookie.get(nomeCookie)
        if (!jwt) return null

        try {
            const decoded: any = jwtDecode(jwt)
            const expired = decoded.exp < Date.now() / 1000
            if (expired) {
                cookie.remove(nomeCookie)
                return null
            }

            return {
                token: jwt,
                user: {
                    id: decoded.id,
                    name: decoded.name,
                    email: decoded.email,
                    professional: decoded.professional, 
                },
            }
        } catch (error) {
            cookie.remove(nomeCookie)
            return null
        }
    }

    return (
        <SessionContext.Provider
            value={{
                loading,
                token,
                user,
                createSession,
                clearSession,
            }}
        >
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContext
