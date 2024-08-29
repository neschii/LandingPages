'use client'
import { useRouter } from 'next/navigation'
import { createContext } from 'react'
import { User } from '@salao/core'
import useSession from '../hooks/useSession'
import useAPI from '../hooks/useAPI'

export interface UserContextProps {
    loading: boolean
    user: User | null
    enter: (user: Partial<User>) => Promise<void>
    register: (user: User) => Promise<void>
    exit: () => void
}

const UserContext = createContext<UserContextProps>({} as any)

export function ProvedorUsuario({ children }: any) {
    const { httpPost } = useAPI()
    const { loading, user, createSession, clearSession } = useSession()
    const router = useRouter()

    async function enter(user: Partial<User>) {
        const token = await httpPost('/usuario/login', user)
        createSession(token)
    }

    async function register(user: User) {
        await httpPost('/usuario/registrar', user)
    }

    function exit() {
        clearSession()
        router.push('/')
    }

    return (
        <UserContext.Provider
            value={{
                loading,
                user,
                enter,
                register,
                exit,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
