import { useProfessionals } from '@salao/ui'
import { Professional } from '@salao/core'
import Image from 'next/image'

interface ProfessionalCardProps {
    professional: Professional
    onClick: (p: Professional) => void
    selected?: boolean
}

function ProfessionalCard({ professional, onClick, selected = false }: ProfessionalCardProps) {
    return (
        <div
            className={`
                flex flex-col items-center cursor-pointer select-none rounded-lg border w-[150px] h-[180px]
                ${selected ? 'border-purple-700' : 'border-transparent'} overflow-hidden
            `}
            onClick={() => onClick(professional)}
        >
            <Image
                src={professional.imagemUrl ?? '/placeholder.png'}
                alt={professional.name ?? 'Professional'}
                width={150}
                height={150}
            />
            <div
                className={`
                    py-2 w-full h-full text-center text-xs
                    ${selected ? 'font-bold text-black bg-purple-700' : 'bg-purple-800 text-white font-bold'}
                `}
            >
                {professional.name ? professional.name.split(' ')[0] : 'Unknown'}
            </div>
        </div>
    )
}

export interface ProfessionalInputProps {
    professional: Professional | null
    professionalChange: (professional: Professional) => void
}

export default function ProfessionalInput({ professional, professionalChange }: ProfessionalInputProps) {
    const { professionals } = useProfessionals()

    return (
        <div className="flex flex-col gap-5">
            <span className="text-sm uppercase text-zinc-400">Profissionais Disponíveis</span>
            <div className="grid grid-cols-2 md:grid-cols-3 self-start gap-5">
                {professionals?.map((professional) => (
                    <ProfessionalCard
                        key={professional.id}
                        professional={professional}
                        onClick={professionalChange}
                        selected={professional.id === professional?.id}
                    />
                ))}
            </div>
        </div>
    )
}