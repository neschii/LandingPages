import Menu from '@/components/shared/Menu'
import Image from 'next/image'

export interface HeaderProps { 
    title: string 
    description: string 
}


export default function Header(props: HeaderProps) { 
    return ( 
          
 <div className="py-10 relative h-[180px]">
            <Image src="/banners/salaobg.jpg" fill alt="Salão" className="object-cover" />
            <div 
            className="
                    flex flex-col items-center
                    absolute top-0 left-0 w-full h-full
                " > 
            <Menu /> 
     <div className="container flex-1 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-black text-white/70">{props.title}</h1>
                    <p className="text-xs font-light text-white/90">{props.description}</p>
                </div>
            </div>
        </div>

    )
}