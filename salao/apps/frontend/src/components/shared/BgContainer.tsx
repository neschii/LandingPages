import Image from 'next/image'

export interface BgContainer {
    children: React.ReactNode
    img: string
}

export default function BgContainer(props: BgContainer) {
    return (
        <div className="relative">
            <Image src={props.img} fill alt="Background" className="object-cover -z-30" />
            <div className="bg-gradient-to-r from-black/80 via-purple-500/50 to-black/80">
                <div className="container py-10">{props.children}</div>
            </div>
        </div>
    )
}
