import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandWhatsapp,
} from '@tabler/icons-react'
import Logo from './Logo'

export default function Footer() { 
    return (
    <footer className="flex items-center bg-violet-200">
                <div className="container flex flex-col gap-5 py-5">
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-1">
                    <Logo  />
                <div className="flex flex-col gap-1 items-center md:items-start ">
                        <span className="text-2xl text-violet-800 font-macondo font-bold mb-1.5">Sobre</span>
                        <span className="text-sm text-violet-950">Nossa História</span>
                        <span className="text-sm text-violet-950">Política de Privacidade</span>
                        <span className="text-sm text-violet-950">Termos de Uso</span> 
            </div>

                        <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-2xl text-violet-800 font-macondo font-bold mb-1.5">Conheça nosso time</span>
                        <div className="flex flex-col items-start gap-2 text-sm text-violet-950">
                            <span>+5512345678924</span>
                            <span>email@email.com</span>
                        </div>
                    <div className="flex gap-3 text-violet-950">
                        <IconBrandWhatsapp size={35} stroke={1} />
                        <IconBrandInstagram size={35} stroke={1} />
                        <IconBrandFacebook size={35} stroke={1} />
                        
                        
                </div>
                    </div>
            <div className="flex flex-col md:flex-row items-center gap-1.5 text-violet-950 text-sm">
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