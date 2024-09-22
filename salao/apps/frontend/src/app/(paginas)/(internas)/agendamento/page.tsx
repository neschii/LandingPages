'use client';

import { useState } from 'react';
import { Professional, Service, Procedure } from '@salao/core';
import { setNextStep, NextStep }  from '@/components/shared/Schedule';
import Schedule  from '@/components/shared/Schedule';
import Header from '@/components/shared/Header';
import useScheduling from '@/data/hooks/useScheduling';
import ProfessionalInput from '@/components/schedules/ProfessionalInput';
import ProceduresInput from '@/components/schedules/ProceduresInput';
import ServicesInput from '@/components/schedules/ServicesInput';
import Summary from '@/components/schedules/Summary';
import DataInput from '@/components/schedules/DataInput';


export default function PageAgendamento() {
    const [currentStep, setCurrentStep] = useState<boolean>(false)
    const {
        professional,
        services,
        procedures,
        data,
        selectProfessional,
        selectServices,
        selectProcedures,
        selectData,
        slotAmount,
    } = useScheduling();

    function professionalChange(professional: Professional) {
        selectProfessional(professional)
        setCurrentStep(!!professional)
    }

        function servicesChange(services: Service[]) {
        selectServices(services)
        setCurrentStep(services.length > 0)
    }

    function proceduresChange(procedures: Procedure[]) {
        selectProcedures(procedures)
        setCurrentStep(procedures.length > 0)
    }

  function dataChange(data: Date) {
        selectData(data)

        const hasData = data
        const hourValidation = data.getHours() >= 8 && data.getHours() <= 21
        setCurrentStep(hasData && hourValidation)
    }
    return (
        <div className="flex flex-col bg-purple-900">
            <Header 
                title="Agendamento"
                description="Seja atendido"
            />
            <div className="container flex flex-col lg:flex-row items-center lg:gap-50 overflow-hidden">
                <Schedule
                    NextStep={NextStep}
                    NextStepChange={setNextStep}
                    labels={[
                        'Informe os serviços',
                        'Escolha os procedimentos',
                        'Selecione o profissional',
                        'Escolha o horário',
                    ]}
                >
                    <ServicesInput
                        service={services}
                        selectServices={selectServices}
                        servicesChange={servicesChange}
                    />
                    <ProceduresInput procedures={procedures} proceduresChange={proceduresChange} />
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
    );
}
