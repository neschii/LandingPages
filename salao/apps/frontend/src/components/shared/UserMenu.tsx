'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown'
import { User } from '@salao/core'
import Image from 'next/image'
import useUser from '@/data/hooks/useUser'
import { useRouter } from 'next/navigation'

export interface UserMenuProps {
    user: User
}

export default function UserMenu(props: UserMenuProps) {
    const { user, exit } = useUser()
    const router = useRouter()

    return props.user ? (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex gap-2 items-center">
                    <div className="flex flex-col items-end">
                        <span className="text-lg font-bold leading-5">{props.user.name}</span>
                        <span className="text-xs text-zinc-400">{props.user.email}</span>
                    </div>
                    <div className="flex justify-center items-center rounded-full overflow-hidden w-10 h-10 p-1 bg-zinc-700">
                        <Image src="" width={40} height={40} alt={props.user.name} />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Menu Usuário</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user?.professional && (
                    <DropdownMenuItem onClick={() => router.push('/agenda')}>
                        Minha Agenda
                    </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={exit}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ) : null
}
