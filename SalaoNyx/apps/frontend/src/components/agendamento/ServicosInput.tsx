import { useServicos } from '@salao/ui'
import { Servico } from '@salao/core'
import Image from 'next/image'

export interface ServicosInputProps {
    servicos: Servico[]
    servicosMudou: (servicos: Servico[]) => void
}

function Opcao(props: { servico: Servico; onClick: (s: Servico) => void; selecionado?: boolean }) {
    return (
        <div
            className={`flex flex-col items-center cursor-pointer select-none border rounded-lg overflow-hidden 
            ${props.selecionado ? 'border-purple-700' : 'border-transparent'}`}
            onClick={() => props.onClick(props.servico)}
        >
            <Image
                src={props.servico.imagemURL}
                alt={props.servico.nome}
                width={180}
                height={180}
                className="object-cover h-[200px]"
            />
            <div
                className={`
                     py-2 w-full h-full text-center text-sm
                    ${props.selecionado ? 'font-bold text-white bg-green-600' : 'bg-purple-800 text-white font-bold '}
                `}
            >
                {props.servico.nome}
            </div>
        </div>
    )
}

export default function ServicosInput(props: ServicosInputProps) {
    const { servicosMudou } = props
    const { servicos: todosServicos } = useServicos()

    function alternarMarcacaoServico(servico: Servico) {
        const servicoSelecionado = props.servicos.find((s) => s.id === servico.id)
        servicosMudou(
            servicoSelecionado
                ? props.servicos.filter((s) => s.id !== servico.id)
                : [...props.servicos, servico]
        )
    }

    return (
        <div className="flex flex-col gap-5">
            <span className="text-sm uppercase text-pink-200">Serviços Disponíveis</span>
            <div className="grid grid-cols-3 self-start gap-5">
                {todosServicos.map((servico) => (
                    <Opcao
                        key={servico.id}
                        servico={servico}
                        onClick={alternarMarcacaoServico}
                        selecionado={props.servicos.some((serv) => serv.id === servico.id)}
                    />
                ))}
            </div>
        </div>
    )
}
