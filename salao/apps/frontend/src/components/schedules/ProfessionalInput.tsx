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
                ${selected ? 'border-black' : 'border-red-500'} overflow-hidden
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
                    ${selected ? 'text-black bg-pink-200 font-semibold' : 'text-red-500 font-light bg-zinc-900'}
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
            <span className="text-sm uppercase text-black">Profissionais Disponíveis</span>
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