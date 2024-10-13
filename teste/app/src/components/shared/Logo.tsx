import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
             <Link href="/" className="flex items-center h-32 ">
            <Image src="/logonyx.png" alt="Logo" width={120} height={150} className="hidden sm:block drop-shadow-[10px_10px_10px_rgba(0,0,0,0.70)] " />
            <Image src="/logonyx.png" alt="Logo" width={100} height={100} className="block sm:hidden " />

<div className="flex flex-col justify-center h-full">
                <div className="relative drop-shadow-[1px_1px_0px_rgba(0,0,0,0.99)]">
                <span className="text-xl sm:text-2xl font-extralight leading-6 tracking-widest text-gradient ">
                    Nyx
                </span></div>
                <div className="relative drop-shadow-[3px_2px_1px_rgba(0,0,0,0.70)]">
                <span className="text-[20px] sm:text-[24px] font-bold leading-6 pl-px text-gradient">
                    Salão
                </span></div>
            </div>
            </Link>
    )
}
