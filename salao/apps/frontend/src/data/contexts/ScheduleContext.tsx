import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Professional, Service, Procedimento } from '@salao/core';
import { DataUtils } from '@salao/core';
import useUser from '../hooks/useUser';
import useAPI from '../hooks/useAPI';

interface SelectedService {
  service: Service;
  selectedProcedimentos: Procedimento[];
}

interface ScheduleContextProps { 
    professional: Professional | null;
    selectedServices: SelectedService[];
    data: Date;
    availableHour: string[];
    totalDuration(): string;
    totalPrice(): number; 
    slotAmount(): number; 
    selectProfessional(professional: Professional): void;
    selectServices(selectedServices: SelectedService[]): void;
    selectData(data: Date): void;
    scheduled(): Promise<void>;
}

export const ScheduleContext = createContext({} as ScheduleContextProps);

export function ProviderScheduling({ children }: { children: React.ReactNode }) {
    const [professional, setProfessional] = useState<Professional | null>(null);
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
    const [data, setData] = useState<Date>(DataUtils.today());

    const { user } = useUser();
    const [availableHour, setAvailableHour] = useState<string[]>([]);
    const { httpGet, httpPost } = useAPI();

    function selectProfessional(professional: Professional) { 
        setProfessional(professional);
    }

    function selectServices(services: SelectedService[]) { 
        setSelectedServices(services);
    }

    function totalDuration() { 
        const duration = selectedServices.reduce((acc, { selectedProcedimentos }) => {
            return acc + selectedProcedimentos.reduce((procAcc, proc) => procAcc + proc.duration, 0);
        }, 0);
        return `${Math.trunc(duration / 60)}h ${duration % 60}m`;
    }

    function totalPrice() {
        return selectedServices.reduce((acc, { selectedProcedimentos }) => { 
            return acc + selectedProcedimentos.reduce((procAcc, proc) => procAcc + proc.price, 0);
        }, 0);
    }

    const selectData = useCallback(function (hour: Date) {
        setData(hour);
    }, []);

    function slotAmount() { 
        const totalMinutes = selectedServices.reduce((acc, { selectedProcedimentos }) => {
            return acc + selectedProcedimentos.reduce((procAcc, proc) => procAcc + proc.duration, 0);
        }, 0);
        return Math.ceil(totalMinutes / 15); // Assuming each slot is 15 minutes
    }

    async function scheduled() { 
        if (!user?.email) return;

        await httpPost('agendamentos', {
            emailClient: user.email,
            data: data!,
            professional: professional!,
            selectedServices: selectedServices,
        });

        clear();
    }

    function clear() {
        setData(DataUtils.today()); 
        setAvailableHour([]);
        setProfessional(null);
        setSelectedServices([]);
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
                selectedServices,
                availableHour,
                totalDuration,
                totalPrice,
                selectData,
                selectProfessional,
                slotAmount,
                selectServices,
                scheduled,
            }}
        >
            {children}
        </ScheduleContext.Provider>
    );
}