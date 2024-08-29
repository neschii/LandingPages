'use client'
import { useState } from 'react'
import { Professional, Service } from '@salao/core'
import Schedule from '@/components/shared/Schedule'
import Header from '@/components/shared/Header'
import useScheduling from '@/data/hooks/useScheduling'
import ProfessionalInput from '@/components/schedules/ProfessionalInput'
import ServicesInput from '@/components/schedules/ServicesInput'
import Summary from '@/components/schedules/Summary'
import DataInput from '@/components/schedules/DataInput'

export default function PageAgendamento() {
    const [nextStep, setNextStep] = useState<boolean>(false)
    const {
        professional,
        services,
        data,
        selectProfessional,
        selectServices,
        selectData,
        slotAmount,
    } = useScheduling()

    function professionalChange(professional: Professional) {
        selectProfessional(professional)
        setNextStep(!!professional)
    }

    function servicesChange(services: Service[]) {
        selectServices(services)
        setNextStep(services.length > 0)
    }

    function dataChange(data: Date) {
        selectData(data)
        const hasData = !!data
        const hourValidation = data && data.getHours() >= 8 && data.getHours() <= 21
        setNextStep(hasData && hourValidation)
    }

    return (
        <div className="flex flex-col bg-purple-900">
            <Header
                title="Agendamento"
                description="Seja atendido"
            />
            <div className="container flex flex-col lg:flex-row items-center lg:items-start lg:justify-around gap-10 lg:gap-0 py-10">
                <Schedule
                    NextStep={nextStep}
                    NextStepChange={setNextStep}
                    labels={[
                        'Selecione o profissional',
                        'Informe os serviços',
                        'Escolha o horário',
                    ]}
                >
                    <ProfessionalInput
                        professional={professional}
                        professionalChange={professionalChange}
                    />
                    <ServicesInput services={services} servicesChange={servicesChange} />
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