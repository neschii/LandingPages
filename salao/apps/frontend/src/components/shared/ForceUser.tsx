'use client'
import { usePathname, useRouter } from 'next/navigation'
import UseUser from '@/data/hooks/UseUser'

export default function ForceUser(props: any) {
    const { loading , user } = UseUser()
    const UserPath = usePathname()
    const router = useRouter()

    function UserPush(url: string) {
        router.push(url)
        return <div className="flex justify-center items-center h-screen">Direcionando...</div>
    }

    if (!user?.email && loading) return <div>Carregando...</div>
    if (!user?.email) return UserPush(`/entrar?destino=${UserPath}`)

    return props.children
}
