'use client'

import Link from 'next/link'

import MenuUsuario from './MenuUsuario'
import useUsuario from '@/data/hooks/useUsuario'
import { IconAddressBook } from '@tabler/icons-react'

export default function MenuSuperior() {
    const { usuario } = useUsuario()

    return (
        <header className="self-end flex justify-center items-center h-24 w-72">
            <nav className="flex items-center justify-between container h-22">
                
                <div>
                    {usuario ? (
                        <MenuUsuario usuario={usuario} />
                    ) : (
                        <Link                             href="/entrar" 
                            className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-900 hover:to-purple-950 text-white font-bold py-2 px-4 rounded transition duration-800 ease-in-out flex items-center gap-2"
                        >
                            <IconAddressBook size={20} />
                            AGENDAMENTOS
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}
