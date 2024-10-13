'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TelefoneUtils } from '@salao/core'
import useUsuario from '@/data/hooks/useUsuario'
import Logo from '@/components/shared/Logo'
import Image from 'next/image'
import { IconUser, IconMail, IconPhone } from '@tabler/icons-react';

export default function FormUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const { usuario, entrar } = useUsuario()
    const params = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        if (usuario?.email) {
            const dest = params.get('destino') as string
            router.push(dest ? dest : '/')
        }
    }, [usuario, router, params])

    return (
        <div className="flex justify-center items-center h-screen relative">
            <Image src="/banners/salaobg.jpg" fill alt="Salão" className="object-cover" />
            <div
                className="
                    flex flex-col justify-center items-center gap-10
                    absolute top-0 left-0 w-full h-full
                    md:bg-transparent md:bg-gradient-to-r bg-gradient-to-r from-black/80 via-purple-500/50 to-black/80
                "
            >
                
                        <Logo />
                

                
                <div className="flex flex-col w-1/5 gap-5 ">
                        <div className="absolute left-[83.3vh] top-[49vh]">
                             <IconUser stroke={2} size={20} className="text-zinc-400" /> 
                        </div>
                    <div className="flex flex-col gap-4 rounded">
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome"
                            className=" text-pink-200 bg-purple-900 px-7 py-2 rounded outline-purple-500"
                            
                        />
                         <div className="absolute left-[83.3vh] top-[55vh]">
                             <IconMail stroke={2} size={20} className="text-zinc-400" /> </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                            className="bg-purple-900 px-7 py-2 rounded outline-purple-500 text-pink-200 border-0"
                        />
                        <div className="absolute left-[83.3vh] top-[61vh]">
                             <IconPhone stroke={2} size={20} className="text-zinc-400" /> </div>
                        <input
                            type="tel"
                            value={TelefoneUtils.formatar(telefone)}
                            onChange={(s) => setTelefone(TelefoneUtils.desformatar(s.target.value))}
                            placeholder="Telefone"
                            className="bg-purple-900 px-7 py-2 rounded outline-purple-500 text-pink-200"
                        />
                        <div className="flex gap-5">
                            <button
                                onClick={() => entrar({ nome, email, telefone })}
                                className="button bg-purple-900 hover:bg-purple-700 flex-1 outline-purple-500"
                            >
                                Entrar
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/')
                                }}
                                className="button flex-1 outline-none"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
