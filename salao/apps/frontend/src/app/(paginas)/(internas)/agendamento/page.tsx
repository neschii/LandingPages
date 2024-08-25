// src/pages/PageSchedule.tsx
'use client'
import { useState } from "react";
import { Professional, Service } from '@salao/core';
import useScheduling from "@/data/hooks/useScheduling";
import Header from "@/components/shared/Header";
import Schedule from "@/components/shared/Schedule";
import ServicesInput from "@/components/schedules/ServicesInput";
import ProfessionalInput from "@/components/schedules/ProfessionalInput";
import DataInput from "@/components/schedules/DataInput";
import Sumary from "@/components/schedules/Sumary";

export default function PageAgendamento() { 
    const [nextStep, setNextStep] = useState<boolean>(false);
    const {
        professional,
        services,
        data,
        selectProfessional,
        selectServices,
        selectData,
        slotAmount,
    } = useScheduling();

    function professionalChange(professional: Professional) { 
        selectProfessional(professional);
        setNextStep(!!professional);
    }

    function servicesChange(services: Service[]) {
        selectServices(services);
        setNextStep(services.length > 0);
    }

    function dataChange(data: Date) { 
        selectData(data);
        const hourValidation = data.getHours() >= 8 && data.getHours() <= 21;
        setNextStep(!!data && hourValidation);
    }

    return (
        <div className="flex flex-col bg-red-900">
            <Header 
                title="lorem ipsum"
                description="lorem lorem lorem"
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
                    />
                </Schedule>
                <Sumary />
            </div>
        </div> 
    );
}
