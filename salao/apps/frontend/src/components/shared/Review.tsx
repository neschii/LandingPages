import { IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'

export interface ReviewProps {
    valor: number
    slot: number
}

export default function Review(props: ReviewProps) {
    const { valor: review, slot } = props

    const estrelas = Array.from({ length: 5 }, (_, index) => {
        const valor = index + 1
        if (review >= valor) {
            return <IconStarFilled key={index} size={18} />
        }
        if (review + 1 > valor) {
            return <IconStarHalfFilled key={index} size={18} />
        }
        return <IconStar key={index} size={18} />
    })

    return (
        <div className="flex items-end gap-2">
            <div className="flex items-center gap-1 text-yellow-400">{estrelas}</div>
            <div className="flex text-xs text-zinc-300">({slot})</div>
        </div>
    )
}
