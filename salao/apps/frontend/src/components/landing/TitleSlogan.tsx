import Menu from '@/components/shared/Menu'
import Image from 'next/image' 


export default function TitleSlogan() { 
    return ( 
 <div className="py-10 relative h-[700px]">
            <Image src="/banners/salaobg.jpg" fill alt="Salão" className="object-cover" />
            <div>
    <Menu />  
      <div className="container flex-1 flex flex-col justify-center items-center gap-5 z-50">
                    <h1 className="flex flex-col items-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-wider">
                            Transformações
                        </span>
                        <span className="text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black pb-2">
                            Lendárias
                        </span>
                    </h1>
                    <p className="w-96 text-center text-zinc-400 text-base sm:text-lg font-extralight">
                        🤘 Seu estilo é o nosso rock! 🤘
                    </p>

</div>
</div> 
</div> 

    )
}