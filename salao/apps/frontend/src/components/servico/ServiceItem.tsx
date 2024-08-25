import { Service } from '@salao/core'
import Image from 'next/image'

export interface ServiceItemProps {
    service: Service
    onClick?: (service: Service) => void
}

export default function ServiceItem(props: ServiceItemProps) {
    return (
        <div
            className={`
                flex rounded-xl overflow-hidden bg-sky-950/90 
                ${props.onClick && 'cursor-pointer'} select-none
            `}
            onClick={() => props.onClick?.(props.service)}
        >
            <Image
                src={props.service.imagemURL}
                width={150}
                height={150}
                alt={props.service.name}
                className="object-cover"
            />
            <div className="flex flex-col p-5 gap-2">
                <span className="text-xl font-black text-red-500">{props.service.name}</span>
                <span className="text-xs text-pink-500 flex-1">{props.service.description}</span>
                <span className="text-lg font-bold text-red-500">R$ {props.service.price.toFixed(2)}</span>
            </div>
        </div>
    )
}
