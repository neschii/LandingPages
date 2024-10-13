'use client'
import Image from 'next/image';
import { useState } from 'react'
import { Profissional, Servico } from '@salao/core'
import useAgendamento from '@/data/hooks/useAgendamento'
import Sumario from '@/components/agendamento/Sumario'
import ServicosInput from '@/components/agendamento/ServicosInput'
import ProfissionalInput from '@/components/agendamento/ProfissionalInput'
import Passos from '@/components/shared/Passos'
import DataInput from '@/components/agendamento/DataInput'
import Cabecalho from '@/components/shared/Cabecalho'

export default function PaginaAgendamento() {
    const [permiteProximoPasso, setPermiteProximoPasso] = useState<boolean>(false)
    const {
        profissional,
        servicos,
        data,
        selecionarProfissional,
        selecionarServicos,
        selecionarData,
        quantidadeDeSlots,
    } = useAgendamento()

    function profissionalMudou(profissional: Profissional) {
        selecionarProfissional(profissional)
        setPermiteProximoPasso(!!profissional)
    }

    function servicosMudou(servicos: Servico[]) {
        selecionarServicos(servicos)
        setPermiteProximoPasso(servicos.length > 0)
    }

    function dataMudou(data: Date) {
        selecionarData(data)

        const temData = data
        const horaValida = data.getHours() >= 8 && data.getHours() <= 21
        setPermiteProximoPasso(temData && horaValida)
    }

    return (
        <div className="relative min-h-screen flex flex-col">
            <Image 
                src="/banners/salaobg.jpg" 
                fill 
                alt="Salão" 
                className="object-cover blur-[2px] "
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-500/50 to-black/80" />
            
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Cabecalho 
                    titulo="Agendamentos"
                    descricao="Agende o seu horario no conforto de casa e aonde quiser!"
                />
                
<main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-2">
    <div className="bg-purple-900 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-[1200px] mx-auto flex flex-col" style={{height: '78vh'}}>
        <div className="flex flex-col lg:flex-row lg:space-x-8 flex-grow">
            <div className="lg:w-2/3 flex flex-col">
                <Passos
                    permiteProximoPasso={permiteProximoPasso}
                    permiteProximoPassoMudou={setPermiteProximoPasso}
                    labels={[
                        'Selecione o profissional',
                        'Informe os serviços',
                        'Escolha o horário',
                    ]}
                > 
                    <ProfissionalInput
                        profissional={profissional}
                        profissionalMudou={profissionalMudou}
                    />
                    <ServicosInput 
                        servicos={servicos} 
                        servicosMudou={servicosMudou} 
                    />
                    <DataInput
                        data={data}
                        dataMudou={dataMudou}
                        quantidadeDeSlots={quantidadeDeSlots()}
                    />
                </Passos>
            </div>
            <div className="lg:w-1/3 mt-6 lg:mt-0">
                <Sumario />
            </div>
        </div>
    </div>
</main>
            </div>
        </div>
    )
}