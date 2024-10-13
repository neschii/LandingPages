import Image from 'next/image'
import Link from 'next/link'

export default function AgendadoComSucesso() {
    return (
        <>
            <Image src="/Design.png" width={400} height={400} alt="Agendado com Sucesso" />
            <h2 className="text-3xl font-black">Agendamento confirmado!</h2>
            <h3 className="text-pink-200 text-lg font-light w-96 text-center">
                Tudo certo por aqui! Seu horário está garantido e agora é só aguardar para brilhar!
            </h3>
            <Link href="/" className="button mt-7 bg-green-600 hover:bg-green-700">
                Voltar para o início
            </Link>
        </>
    )
}
