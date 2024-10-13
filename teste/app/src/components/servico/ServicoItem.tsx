import { Servico } from '@salao/core'
import Image from 'next/image'

export interface ServicoItemProps {
    servico: Servico
    onClick?: (servico: Servico) => void
}

export default function ServicoItem(props: ServicoItemProps) {
    return (
   <div
    className={`
        
        flex rounded-xl bg-purple-900
        drop-shadow-[0_5px_5px_rgba(0,0,0,0.99)]
        hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.99)]
        ${props.onClick && 'cursor-pointer'} select-none
        overflow-hidden transition-all duration-300 ease-in-out hover:scale-105
    `}
    onClick={() => props.onClick?.(props.servico)}
>
            <Image
                src={props.servico.imagemURL}
                width={150}
                height={150}
                alt={props.servico.nome}
                className="object-cover"
            />
            <div className="flex flex-col p-5 gap-2">
                <span className="text-xl font-black text-pink-200 ">{props.servico.nome}</span>
                <span className="text-xs text-pink-100 flex-1">{props.servico.descricao}</span>
                <span className="text-lg font-bold text-pink-200 ">R$ {props.servico.preco.toFixed(2)}</span>
            </div>
        </div>
    )
}
