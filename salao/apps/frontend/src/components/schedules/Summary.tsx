import { IconCalendar } from '@tabler/icons-react'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import useScheduling from '@/data/hooks/useScheduling'
import { useRouter } from 'next/navigation'
import { Service } from '@salao/core'

export default function Summary() {
    const [loading, setLoading] = useState(false)
    const { data, professional, services = [], totalPrice, totalDuration, agendar } = useScheduling()
    const router = useRouter()

    async function finishAppointment() {
        try {
            setLoading(true)
            await agendar()
            router.push('/agendamento/sucesso')
        } finally {
            setLoading(false)
        }
    }

    function renderService(service: Service, i: number) {
        return (
            <div key={service.id} className="flex items-center bg-zinc-700 rounded-md">
                <span className="flex justify-center items-center text-xs text-zinc-400 px-3 bg-black/25 w-5 py-1.5">
                    {i}
                </span>
                <span className="text-sm font-light text-zinc-300 px-2">{service.name}</span>
            </div>
        )
    }

    function finishNow() {
        if (!professional) return false;
        if (services.length === 0) return false;
        return data && data.getHours() >= 8 && data.getHours() <= 21;
    }

    return (
        <div className="flex flex-col bg-purple-900 rounded-lg w-96 lg:w-80">
            <div className="flex gap-2 p-4 border-b border-zinc-800">
                <div className="flex justify-center items-center bg-zinc-800 h-9 w-9 rounded-full">
                    <IconCalendar stroke={1} size={20} />
                </div>
                <div className="flex flex-col gap-3">
                <span className="flex gap-2 flex-wrap text-sm text-white">
    {services && Array.isArray(services) && services.length > 0 
        ? services.map((service, i) => renderService(service, i + 1)) 
        : 'Não Selecionado'}
</span>
        </div>
                <div className="flex flex-col ">
                    <span className="font-bold text-zinc-300 leading-6">
                        Sumário do Agendamento
                    </span>
                    <span className="text-xs text-zinc-500 leading-3">
                        Será um prazer atendê-lo!
                    </span>
                </div>
            </div>
            <div className="flex flex-col p-5 gap-6 border-b border-zinc-800">
                <div className="flex flex-col gap-3">
                    <span className="text-xs uppercase text-zinc-400">Professional</span>
                    <span className="text-sm text-white">
                        {professional ? professional.name : 'Não selecionado'}
                    </span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-xs uppercase text-zinc-400">Serviços</span>
                    <span className="flex gap-2 flex-wrap text-sm text-white">
                        {services.length > 0 
                            ? services.map((service, i) => renderService(service, i + 1)) 
                            : 'Não Selecionado'}
                    </span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-800 p-5">
                    <span className="text-xs uppercase text-zinc-400">Valor Total</span>
                    <span className="text-white font-semibold">
                        R$ {typeof totalPrice === 'function' ? totalPrice() : 0},00
                    </span>
                </div>
                <div className="p-5">
                    <button
                        className={`flex justify-center items-center text-sm font-semibold ${
                            finishNow() ? 'bg-yellow-400' : 'bg-zinc-600'
                        } text-zinc-900 w-full py-3 rounded-lg`}
                        disabled={!finishNow()}
                        onClick={finishAppointment}
                    >
                        {loading && data ? (
                            <Loader2 className="animate-spin" size={32} />
                        ) : (
                            'Finalizar Agendamento'
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
