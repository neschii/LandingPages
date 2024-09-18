import { Schedule } from '@salao/core'
import { useCallback, useEffect, useState } from 'react'
import useUser from './useUser'
import useAPI from './useAPI'

export default function useProfessional() {
    const { user } = useUser()
    const { httpGet, httpDelete } = useAPI()
    const [data, setData] = useState<Date>(new Date())
    const [schedules, setSchedules] = useState<Schedule[]>([])

    const carregarAgendamentos = useCallback(async () => {
        if (!user) return
        const dtString = data.toISOString().slice(0, 10)
        const schedules = await httpGet(`agendamentos/${user.id}/${dtString}`)
        setSchedules(schedules)
    }, [httpGet, user, data])

    useEffect(() => {
        carregarAgendamentos()
    }, [carregarAgendamentos])

    async function excluirAgendamento(id: number) {
        await httpDelete(`agendamentos/${id}`)
        setSchedules(schedules.filter((a) => a.id !== id))
    }

    return {
        data,
        schedules,
        alterarData: setData,
        excluirAgendamento,
    }
}
