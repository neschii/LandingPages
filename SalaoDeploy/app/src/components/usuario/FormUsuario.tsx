'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { TelefoneUtils } from '@salao/core'
import useUsuario from '@/data/hooks/useUsuario'
import Logo from '@/components/shared/Logo'
import Image from 'next/image'
import { IconUser, IconMail, IconPhone } from '@tabler/icons-react'
import { useForm, SubmitHandler } from "react-hook-form"

const InputWithIcon = ({ icon, error, ...props }) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
      {icon}
    </div>
    <input
      {...props}
      className="w-full bg-purple-900 pl-10 pr-3 py-2 rounded-se-xl rounded-ee-xl rounded-es-xl text-pink-200 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-md"
    />
    {error && (
      <span className="text-red-500 text-sm mt-1 block">{error}</span>
    )}
  </div>
)

interface FormInputs {
  nome: string;
  email: string;
  telefone: string;
}

export default function FormUsuario() {
    const { usuario, entrar } = useUsuario()
    const params = useSearchParams()
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<FormInputs>()

    const telefone = watch('telefone')
    useEffect(() => {
        if (telefone) {
            const rawValue = TelefoneUtils.desformatar(telefone)
            const formattedValue = TelefoneUtils.formatar(rawValue)
            if (formattedValue !== telefone) {
                setValue('telefone', formattedValue)
            }
        }
    }, [telefone, setValue])

    useEffect(() => {
        if (usuario?.email) {
            const dest = params.get('destino') as string
            router.push(dest ? dest : '/')
        }
    }, [usuario, router, params])

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        entrar(data)
    }

    return (
        <div className="flex justify-center items-center h-screen relative">
            <Image src="/banners/salaobg.jpg" fill alt="Salão" className="object-cover" />
            <div className="
                flex flex-col justify-center items-center gap-10
                absolute top-0 left-0 w-full h-full
                bg-gradient-to-r from-black/80 via-purple-500/50 to-black/80
            ">
                <Logo />
                
                <div className="w-full max-w-md px-4">
                    <div className="flex flex-col gap-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <InputWithIcon
                                icon={<IconUser stroke={2} size={20} />}
                                type="text"
                                placeholder="Nome"
                                error={errors.nome?.message}
                                {...register('nome', {
                                    required: 'Nome é obrigatório',
                                    minLength: {
                                        value: 3,
                                        message: 'Nome deve ter no mínimo 3 caracteres'
                                    }
                                })}
                            />
                            
                            <InputWithIcon
                                icon={<IconMail stroke={2} size={20} />}
                                type="email"
                                placeholder="E-mail"
                                error={errors.email?.message}
                                {...register('email', {
                                    required: 'E-mail é obrigatório',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'E-mail inválido'
                                    }
                                })}
                            />
                            
                            <InputWithIcon
                                icon={<IconPhone stroke={2} size={20} />}
                                type="tel"
                                placeholder="Telefone"
                                error={errors.telefone?.message}
                                {...register('telefone', {
                                    required: 'Telefone é obrigatório',
                                    pattern: {
                                        value: /^\(\d{2}\)\s\d{5}-\d{4}$/,
                                        message: 'Telefone inválido. Use o formato (99) 99999-9999'
                                    }
                                })}
                            />

                            <div className="flex gap-4 mt-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-purple-900 hover:bg-purple-800 text-white py-2 rounded transition-colors"
                                >
                                    Entrar
                                </button>
                                <button
                                    type="button"
                                    onClick={() => router.push('/')}
                                    className="flex-1 bg-zinc-700 text-white py-2 rounded"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}