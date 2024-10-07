import { IconCalendar } from '@tabler/icons-react'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import useAgendamento from '@/data/hooks/useAgendamento'
import { useRouter } from 'next/navigation'

export default function Sumario() {
    const [carregando, setCarregando] = useState(false)
    const { data, profissional, servicos, precoTotal, duracaoTotal, agendar } = useAgendamento()
    const router = useRouter()

    async function finalizarAgendamento() {
        try {
            setCarregando(true)
            await agendar()
            router.push('/agendamento/sucesso')
        } finally {
            setCarregando(false)
        }
    }

    function renderizarServico(nome: string, i: number) {
        return (
            <div key={i} className="flex items-center  text-pink-200rounded-md">
                <span className="flex justify-center items-center text-xs text-pink-200 px-3 bg-purple-800 w-5 py-1.5">
                    {i}
                </span>
                <span className="text-sm font-light text-white px-2">{nome}</span>
            </div>
        )
    }

    function podeFinalizar() {
        if (!profissional) return false
        if (!servicos.length) return false
        return data && data.getHours() >= 8 && data.getHours() <= 21
    }

    return (
        <div className="flex flex-col bg-purple-900 rounded-lg w-96 lg:w-80">
            <div className="flex gap-2 p-4 border-b border-purple-800">
                <div className="flex justify-center items-center bg-purple-800 h-9 w-9 rounded-full">
                    <IconCalendar stroke={1} size={20} />
                </div>
                <div className="flex flex-col ">
                    <span className="font-bold text-pink-200 leading-6">
                        Sumário do Agendamento
                    </span>
                    <span className="text-xs text-zinc-500 leading-3">
                        Será um prazer atendê-lo!
                    </span>
                </div>
            </div>
            <div className="flex flex-col p-5 gap-6 border-b border-purple-800">
                <div className="flex flex-col gap-3">
                    <span className="text-xs uppercase text-pink-200">Profissional</span>
                    <span className="text-sm text-white">
                        {profissional ? profissional.nome : 'Não selecionado'}
                    </span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-xs uppercase text-pink-200">Serviços</span>
                    <span className="flex gap-2 flex-wrap text-sm text-white">
                        {servicos.length
                            ? servicos.map((servico, i) => renderizarServico(servico.nome, i + 1))
                            : 'Não selecionado'}
                    </span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-xs uppercase text-pink-200">Duração</span>
                    <span className="text-sm text-white">{duracaoTotal()}</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-xs uppercase text-pink-200">Horário</span>
                    <span className="text-sm text-white">
                        {data &&
                            data?.toLocaleDateString?.('pt-BR', {
                                dateStyle: 'long',
                            })}{' '}
                        {data &&
                            ` às ${String(data?.getHours()).padStart(2, '0')}:${String(data?.getMinutes()).padStart(2, '0')}h`}
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-center border-b border-purple-800 p-5">
                <span className="text-xs uppercase text-pink-200">Valor Total</span>
                <span className=" text-white font-semibold">R$ {precoTotal()},00</span>
            </div>
            <div className="p-5">
                <button
                    className={`flex justify-center items-center text-sm font-semibold ${podeFinalizar() ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-800'} text-white w-full py-3 rounded-lg`}
                    disabled={!podeFinalizar()}
                    onClick={finalizarAgendamento}
                >
                    {carregando && data ? (
                        <Loader2 className="animate-spin" size={32} />
                    ) : (
                        'Finalizar Agendamento'
                    )}
                </button>
            </div>
        </div>
    )
}
