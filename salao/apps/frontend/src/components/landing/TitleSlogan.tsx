import Menu from '@/components/shared/Menu'
import Image from 'next/image' 
import Link from 'next/link'

export default function TitleSlogan() { 
    return ( 
 <div className="px-8 relative mx-auto h-screen">
            <Image src="/banners/salaobg.jpg" fill alt="Salão" className="object-cover" />
            <div className="
                    flex flex-col items-center
                    absolute top-0 left-0 w-full h-full
                    bg-black/80 md:bg-transparent md:bg-gradient-to-r bg-gradient-to-r from-black/80 via-purple-500/50 to-black/80">
            <Menu />  
            <div className="container flex-1 flex flex-col justify-center items-center gap-2 z-50">
                 <h1 className="flex flex-col items-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-wider text-white">
                            Belezas que brilham
                        </span> 
                        <span className=" drop-shadow-[0_5px_5px_rgba(0,0,0,0.99)] text-gradient text-4xl sm:text-xl= md:text-xl lg:text-7xl font-black">
                            Transforme-se
                        </span>
                    </h1>
                    <p className="w-96 text-center text-white text-base sm:text-lg font-bold">
                        🌸 ONDE CORES GANHAM VIDA! 🌸
                    </p>
    <Link
                        href="/agendamento"
                        className="
                            bg-gradient-to-r from-green-500 to-green-600
                            text-white font-semibold text-base md:text-lg
                            py-2 px-4 rounded-md hover:from-green-600 hover:to-green-700
                        "
                    >
                        Agendar Agora
                    </Link>
</div>
</div> 
</div> 

    )
}