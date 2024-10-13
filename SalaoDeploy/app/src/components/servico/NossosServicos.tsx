'use client'
import { Servico } from '@salao/core'
import { useRouter } from 'next/navigation'
import { useServicos } from '@salao/ui'
import ServicoItem from './ServicoItem'
import Titulo from '../shared/Titulo'

export default function NossosServicos() {
    const router = useRouter()
    const { servicos } = useServicos()

    function iniciarAgendamento() {
        router.push('/agendamento')
    }

    return (
        <div className="py-10 m-2 flex flex-col gap-12 ">
            <Titulo
                tag="Serviços"
                principal="Do Clássico ao Inovador!"
                secundario="Oferecemos uma variedade de serviços, desde cortes e coloração até tratamentos faciais. Nossos profissionais qualificados realçam sua beleza natural em um ambiente acolhedor e inovador."
            />
             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {servicos.map((servico: Servico) => (
                    <ServicoItem key={servico.id} servico={servico} onClick={iniciarAgendamento} />
                ))}
            </div>
        </div>
    )
}
