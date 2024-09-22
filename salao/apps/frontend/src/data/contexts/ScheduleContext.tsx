import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Professional, Service, Procedure, AgendaUtils } from '@salao/core';
import { DataUtils } from '@salao/core';
import useUser from '../hooks/useUser';
import useAPI from '../hooks/useAPI';

interface ScheduleContextProps { 
    professional: Professional | null;
    services: Service[];
    procedures: Procedure[];
    data: Date;
    availableHour: string[];
    totalDuration(): string;
    totalPrice(): number; 
    slotAmount(): number; 
    selectProfessional(professional: Professional): void;
    selectServices(services: Service[]): void;
    selectProcedures(procedures: Procedure[]): void;
    selectData(data: Date): void;
    scheduled(): Promise<void>;
}

export const ScheduleContext = createContext({} as ScheduleContextProps);

export function ProviderScheduling({ children }: { children: React.ReactNode }) {
    const [professional, setProfessional] = useState<Professional | null>(null);
    const [services, setServices] = useState<Service[]>([]);
    const [procedures, setProcedures] = useState<Procedure[]>([]);
    const [data, setData] = useState<Date>(DataUtils.today());

    const { user } = useUser();
    const [availableHour, setAvailableHour] = useState<string[]>([]);
    const { httpGet, httpPost } = useAPI();

    function selectProfessional(professional: Professional) {
        setProfessional(professional)
    }

    function selectServices(services: Service[]) {
        setServices(services)
    }

    function selectProcedures(selectedProcedures: Procedure[]) {
        setProcedures(selectedProcedures);
    }

    function totalDuration() {
        return AgendaUtils.totalDuration(services)
    }


   function totalPrice() {
        return services.reduce((acc, actual) => {
            return (acc += actual.price)
        }, 0)
    }

    const selectData = useCallback(function (hour: Date) {
        setData(hour);
    }, []);

    function slotAmount() {
        const totalSlots = services.reduce((acc, service) => {
            return (acc += service.slotAmount)
        }, 0)

        return totalSlots
    }

 async function scheduled() { 
        if (!user?.email) return;

        await httpPost('agendamentos', {
            emailClient: user.email,
            data: data!,
            professional: professional!,
            services: services,
            procedures: procedures,
        });

        clear();
    }

    function clear() {
        setData(DataUtils.today()); 
        setAvailableHour([]);
        setProfessional(null);
        setServices([]);
        setProcedures([]);
    }


    const handleAvailableHour = useCallback(
        async function (data: Date, professional: Professional): Promise<string[]> {
            try {
                if (!data || !professional) return [];
                const dtString = data.toISOString().slice(0, 10);
                const unavailable = await httpGet(
                    `agendamentos/unavailable/${professional!.id}/${dtString}`
                );
                return unavailable ?? [];
            } catch (e) {
                return [];
            }
        },
        [httpGet]
    );

    useEffect(() => {
        if (!data || !professional) return;
        handleAvailableHour(data, professional).then(setAvailableHour);
    }, [data, professional, handleAvailableHour]);

 return (
        <ScheduleContext.Provider
            value={{
                data,
                professional,
                services,
                procedures,
                availableHour,
                totalDuration,
                totalPrice,
                selectData,
                selectProfessional,
                slotAmount,
                selectServices,
                selectProcedures,
                scheduled,
            }}
        >
            {children}
        </ScheduleContext.Provider>
    );
}