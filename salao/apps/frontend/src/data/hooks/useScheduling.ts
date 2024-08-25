import { useContext } from 'react'
import { ScheduleContext } from '@/data/contexts/ScheduleContext'

const useScheduling = () => useContext(ScheduleContext)
export default useScheduling
