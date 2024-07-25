import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconBrandYoutube,
} from '@tabler/icons-react'


export default function Footer() { 
    return (
    <footer className="flex items-center bg-stone-900">
                <div className="container flex flex-col gap-7 py-10">
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-5">
        <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-2xl text-zinc-300 font-bold mb-2.5">Sobre</span>
                        <span className="text-sm text-violet-400">Nossa História</span>
                        <span className="text-sm text-violet-400">Política de Privacidade</span>
                        <span className="text-sm text-violet-400">Termos de Uso</span> 
            </div>

                        <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-2xl text-zinc-300 font-bold mb-2.5">Entre em contato</span>
                        <div className="flex flex-col items-start gap-2 text-sm text-zinc-400">
                            <span>+5519983409924</span>
                            <span>email@email.com</span>
                        </div>
                    <div className="flex gap-3 text-violet-400">
                        <IconBrandWhatsapp size={35} stroke={1} />
                        <IconBrandInstagram size={35} stroke={1} />
                        <IconBrandFacebook size={35} stroke={1} />
                        <IconBrandLinkedin size={35} stroke={1} />
                        
                </div>
                    </div>
            <div className="flex flex-col md:flex-row items-center gap-1.5 text-zinc-400 text-sm">
                        <div className="flex gap-1.5">
                            <span>Feito com amor</span>
                            <span>♡</span>
                            <span>em {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>Todos os direitos reservados</span>
                    </div>
            </div>
        </div>
        </footer>
    )
}