import { useContext } from 'react'
import { ScheduleContext } from '@/data/contexts/ScheduleContext'

export default function useScheduling() {
    const context = useContext(ScheduleContext);

    if (!context) {
        throw new Error('useScheduling must be used within a ProviderScheduling');
    }

    return context;
}