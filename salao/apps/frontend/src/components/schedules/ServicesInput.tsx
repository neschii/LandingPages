import { useServices } from '@salao/ui'
import { Service } from '@salao/core'
import Image from 'next/image'

export interface ServicesInputProps {
    services: Service[]
    servicesChange: (services: Service[]) => void
}

function Option(props: { services: Service; onClick: (s: Service) => void; selecionado?: boolean }) {
    return (
        <div
            className={`flex flex-col items-center cursor-pointer select-none border rounded-lg overflow-hidden 
            ${props.selecionado ? 'border-green-400' : 'border-zinc-700'}`}
            onClick={() => props.onClick(props.services)}
        >
            <Image
                src={props.services.imagemURL}
                alt={props.services.name}
                width={150}
                height={120}
            />
            <div
                className={`
                    py-2 w-full h-full text-center text-xs
                    ${props.selecionado ? 'text-black bg-green-400 font-semibold' : 'text-zinc-400 font-light bg-zinc-900 '}
                `}
            >
                {props.services.name}
            </div>
        </div>
    )
}

export default function ServicesInput(props: ServiceInputProps) {
    const { servicesChange } = props
    const { services: todosServicos } = useServices()

    function alternarMarcacaoServico(service: Service) {
        const servicoSelecionado = props.services.find((s) => s.id === service.id)
        servicesChange(
            servicoSelecionado
                ? props.services.filter((s) => s.id !== service.id)
                : [...props.services, service]
        )
    }

    return (
        <div className="flex flex-col gap-5">
            <span className="text-sm uppercase text-zinc-400">Serviços Disponíveis</span>
            <div className="grid grid-cols-3 self-start gap-5">
                {todosServicos.map((services) => (
                    <Option
                        key={services.id}
                        services={services}
                        onClick={alternarMarcacaoServico}
                        selecionado={props.services.some((serv) => serv.id === services.id)}
                    />
                ))}
            </div>
        </div>
    )
}
