import { useState } from 'react';
import { cn } from '@/lib/utils';
import { IconX } from '@tabler/icons-react';
import { AgendaUtils, DataUtils } from '@salao/core';
import useScheduling from '@/data/hooks/useScheduling';

export interface HourInputProps {
    data: Date;
    slotHour: number;
    dataChange(data: Date): void;
}

export default function HourInput(props: HourInputProps) {
    const [hourHover, setHoursHover] = useState<string | null>(null);
    const { availableHour } = useScheduling();
    const { manha, tarde, noite } = AgendaUtils.HourDay();

    const selectedHour = props.data
        ? props.data.toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit',
          })
        : '';

    function getTimeDay(hour: string | null, slot: number) {
        if (!hour) return [];
        const hours = manha.includes(hour) ? manha : tarde.includes(hour) ? tarde : noite;
        const index = hours.findIndex((h) => hour === h);
        return hours.slice(index, index + slot);
    }

    function renderHour(hour: string) {
        const periodo = getTimeDay(hourHover, props.slotHour);
        const hasHour = periodo.length === props.slotHour;
        const destacarHora = hasHour && periodo.includes(hour);
        const selectTime = getTimeDay(selectedHour, props.slotHour);
        const selected = selectTime.length === props.slotHour && selectTime.includes(hour);
        const notSelected = !hasHour && periodo.includes(hour);
        const periodoBloqueado = periodo.includes(hour) && availableHour?.includes(hour);
        const busy = availableHour?.includes(hour);

        return (
            <div
                key={hour}
                className={cn(
                    'flex justify-center items-center cursor-pointer h-8 border border-purple-700 rounded select-none',
                    {
                        'bg-yellow-400': destacarHora,
                        'bg-red-500': notSelected || periodoBloqueado,
                        'text-pink-300 bg-green-500': selected,
                        'cursor-not-allowed bg-zinc-800': busy,
                    }
                )}
                onMouseEnter={() => setHoursHover(hour)}
                onMouseLeave={() => setHoursHover(null)}
                onClick={() => {
                    if (notSelected || busy || periodoBloqueado) return;
                    const newDate = DataUtils.setHour(props.data, hour);
                    if (newDate instanceof Date) {
                        props.dataChange(newDate);
                     } else {
                        console.error('setHour did not return a valid Date object');
                    }
                }}
            >
                <span
                    className={cn('text-sm text-purple-400', {
                        'text-black font-semibold': destacarHora,
                        'text-white font-semibold': selected,
                        'text-pink-300 font-semibold': busy,
                    })}
                >
                    {notSelected || periodoBloqueado || busy ? (
                        <IconX size={18} className="text-white" />
                    ) : (
                        hour
                    )}
                </span>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            <span className="text-sm uppercase text-zinc-400">Horários Disponíveis</span>
            <div className="flex flex-col gap-3 select-none">
                <span className="text-xs uppercase text-zinc-400">Manhã</span>
                <div className="grid grid-cols-8 gap-1">{manha.map(renderHour)}</div>

                <span className="text-xs uppercase text-zinc-400">Tarde</span>
                <div className="grid grid-cols-8 gap-1">{tarde.map(renderHour)}</div>

                <span className="text-xs uppercase text-zinc-400">Noite</span>
                <div className="grid grid-cols-8 gap-1">{noite.map(renderHour)}</div>
            </div>
        </div>
    );
}
