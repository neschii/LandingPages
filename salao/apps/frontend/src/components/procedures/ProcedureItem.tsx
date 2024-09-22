import { Procedure } from '@salao/core'
import Image from 'next/image'

export interface ProcedureItemProps {
    procedure: Procedure
    onClick?: (procedure: Procedure) => void
}

export default function ProcedureItem(props: ProcedureItemProps) {
    const price = typeof props.procedure.price === 'number' ? props.procedure.price : 0;

    return (
        <div
            className={`
                flex rounded-xl bg-purple-900 drop-shadow-[0_5px_5px_rgba(0,0,0,0.99)]
                ${props.onClick && 'cursor-pointer'} select-none
            `}
            onClick={() => props.onClick?.(props.procedure)}
        >
            <Image
                src={props.procedure.imagemURL}
                width={150}
                height={150}
                alt={props.procedure.name}
                className="object-cover"
            />
            <div className="flex flex-col p-5 gap-2 ">
                <span className="text-xl font-black text-pink-100 ">{props.procedure.name}</span>
                <span className="text-xs text-pink-100 flex-1">{props.procedure.description}</span>
                <span className="text-lg font-bold text-pink-100 ">R$ {price.toFixed(2)}</span>
            </div>
        </div>
    )
}