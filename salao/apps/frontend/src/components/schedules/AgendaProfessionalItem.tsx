import { Schedule, AgendaUtils, DataUtils } from '@salao/core'
import { IconCalendar, IconTrash } from '@tabler/icons-react'

export interface AgendaProfessionalItem {
    schedule: Schedule
    excluir: (id: number) => void
}

export default function AgendaProfessionalItem(props: AgendaProfessionalItemProps) {
    const { schedule } = props

    return (
        <div className="flex items-center gap-6 bg-zinc-800 rounded-md p-7">
            <IconCalendar size={60} stroke={1} />
            <div className="flex-1 flex flex-col">
                <span className="text-xl">{schedule.user.nome}</span>
                <span className="text-zinc-400 text-sm">
                    {DataUtils.formatarDataEHora(new Date(schedule.data))}
                </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-xl font-black">
                    {AgendaUtils.duracaoTotal(schedule.services)}
                </span>
                <span className="text-zinc-400">
                    R$ {schedule.services.reduce((acc, service) => acc + service.price, 0)}
                </span>
            </div>
            <div>
                <button className="button bg-red-500" onClick={() => props.excluir(schedule.id)}>
                    <IconTrash size={24} stroke={1.5} />
                </button>
            </div>
        </div>
    )
}
