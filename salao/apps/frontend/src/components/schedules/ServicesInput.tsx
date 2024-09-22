import { useServices } from '@salao/ui';
import { Service } from '@salao/core';
import Image from 'next/image';

export interface ServicesInputProps {
    selectedServices?: Service[]; // Made optional
    servicesChange: (services: Service[]) => void;
}

function ServiceOption({ service, onSelect, isSelected }: { service: Service; onSelect: (s: Service) => void; isSelected: boolean }) {
    return (
        <div
            className={`flex flex-col items-center cursor-pointer border rounded-lg overflow-hidden 
            ${isSelected ? 'border-purple-700' : 'border-transparent'} transition-all duration-200`}
            onClick={() => onSelect(service)}
        >
            <Image
                src={service.imagemURL}
                alt={service.name}
                width={150}
                height={120}
                className="object-cover"
            />
            <div className={`py-2 w-full text-center text-xs 
                ${isSelected ? 'bg-purple-700 text-black' : 'bg-purple-800 text-white font-semibold'}`}
            >
                {service.name}
            </div>
        </div>
    );
}

export default function ServicesInput({ selectedServices = [], servicesChange }: ServicesInputProps) {
    const { services: allServices } = useServices();

    const handleServiceToggle = (service: Service) => {
        const isSelected = selectedServices.some((s) => s.id === service.id);
        const updatedServices = isSelected 
            ? selectedServices.filter((s) => s.id !== service.id) 
            : [...selectedServices, service];

        servicesChange(updatedServices);
    };

    return (
        <div className="flex flex-col gap-5">
            <span className="text-sm uppercase text-zinc-400">Serviços Disponíveis</span>
            <div className="grid grid-cols-3 gap-5">
                {allServices.map((service) => (
                    <ServiceOption
                        key={service.id}
                        service={service}
                        onSelect={handleServiceToggle}
                        isSelected={selectedServices.some((s) => s.id === service.id)}
                    />
                ))}
            </div>
        </div>
    );
}
