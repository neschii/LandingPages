import Image from 'next/image'

export interface ContainerComBackgroundProps {
    children: React.ReactNode
    imagem: string
}

export default function ContainerComBackground(props: ContainerComBackgroundProps) {
    return (
        <div className="relative">
            <Image src={props.imagem} fill alt="Background" className="object-cover -z-30" />
             <div className="bg-gradient-to-r from-black/80 via-purple-500/50 to-black/80">
                <div className="container py-10">{props.children}</div>
            </div>
        </div>
    )
}
