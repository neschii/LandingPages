import { useProfissionais } from '@salao/ui'
import { Profissional } from '@salao/core'
import Image from 'next/image'

export interface ProfissionalInputProps {
    profissional: Profissional | null
    profissionalMudou: (profissional: Profissional) => void
}

function Opcao(props: {
    profissional: Profissional
    onClick: (p: Profissional) => void
    selecionado?: boolean
}) {
    return (
        <div
            className={`
                flex flex-col items-center cursor-pointer select-none rounded-lg border w-[180px] h-[210px]
                ${props.selecionado ? 'border-purple-700' : 'border-transparent'} overflow-hidden
            `}
            onClick={() => props.onClick(props.profissional)}
        >
            <Image
                src={props.profissional.imagemUrl}
                alt={props.profissional.nome}
                width={180}
                height={180}
                className="object-cover h-[200px]"
            />
            <div
                className={`
                   py- w-full h-full text-center text-lg
                    ${props.selecionado ? 'font-bold text-white bg-green-600' : 'bg-purple-800 text-white font-bold'}
                `}
            >
                {props.profissional.nome.split(' ')[0]}
            </div>
        </div>
    )
}

export default function ProfissionalInput(props: ProfissionalInputProps) {
    const { profissionais } = useProfissionais()

    return (
        <div className="flex flex-col gap-5">
            <span className="text-sm uppercase text-pink-200">Profissionais Disponíveis</span>
            <div className="grid grid-cols-2 md:grid-cols-3 self-start gap-5">
                {profissionais.map((profissional) => (
                    <Opcao
                        key={profissional.id}
                        profissional={profissional}
                        onClick={props.profissionalMudou}
                        selecionado={profissional.id === props.profissional?.id}
                    />
                ))}
            </div>
        </div>
    )
}
