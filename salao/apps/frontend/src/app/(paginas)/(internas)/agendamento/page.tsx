'use client'

import { useState } from 'react'
import { Professional, Service, Procedimento } from '@salao/core'
import Schedule from '@/components/shared/Schedule'
import Header from '@/components/shared/Header'
import useScheduling from '@/data/hooks/useScheduling'
import ProfessionalInput from '@/components/schedules/ProfessionalInput'
import ProcedimentosInput from '@/components/schedules/ProcedimentosInput'
import ServicesInput from '@/components/schedules/ServicesInput'
import Summary from '@/components/schedules/Summary'
import DataInput from '@/components/schedules/DataInput'

export default function PageAgendamento() {
    const [nextStep, setNextStep] = useState<boolean>(false)
    const {
        professional,
        services,
        data,
        procedimentos,
        selectProfessional,
        selectProcedimentos,
        selectServices,
        selectData,
        slotAmount,
    } = useScheduling()

    function professionalChange(professional: Professional) {
        selectProfessional(professional)
        setNextStep(!!professional)
    }

    function procedimentosChange(updatedProcedimentos: Procedimento[]) {
        if (typeof selectProcedimentos === 'function') {
            selectProcedimentos(updatedProcedimentos)
            setNextStep(updatedProcedimentos.length > 0)
        } else {
            console.error('selectProcedimentos is not a function')
        }
    }

    function servicesChange(services: Service[]) {
        if (typeof selectServices === 'function') {
            selectServices(services)
            setNextStep(services.length > 0)
        } else {
            console.error('selectServices is not a function')
        }
    }

    function dataChange(data: Date) {
        selectData(data)
        const hasData = !!data
        const hourValidation = data && data.getHours() >= 8 && data.getHours() <= 21
        setNextStep(hasData && hourValidation)
    }

    return (
        <div className="flex flex-col text-red-500">
            <Header
                title="Agendamento"
                description="Seja atendido"
            />
            <div className="container flex flex-col lg:flex-row items-center lg:items-start lg:justify-around gap-10 lg:gap-0 py-10">
                <Schedule
                    NextStep={nextStep}
                    NextStepChange={setNextStep}
                    labels={[
                        'Informe os serviços',
                        'Escolha os procedimentos',
                        'Selecione o profissional',
                        'Escolha o horário',
                    ]}
                >
                    <ServicesInput services={services} servicesChange={servicesChange} />
                    <ProcedimentosInput
                        services={procedimentos}
                        onChange={procedimentosChange}
                    />
                    <ProfessionalInput
                        professional={professional}
                        professionalChange={professionalChange}
                    />
                    <DataInput
                        data={data}
                        dataChange={dataChange}
                        slotAmount={slotAmount}
                    />
                </Schedule>
                <Summary />
            </div>
        </div>
    )
}