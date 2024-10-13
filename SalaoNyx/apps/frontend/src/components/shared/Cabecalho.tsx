import Image from 'next/image'
import MenuSuperior from '@/components/shared/MenuSuperior'

export interface CabecalhoProps {
    titulo: string
    descricao: string
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <div className="py-10 relative h-[180px]">
      <div className="absolute inset-0" />
      <div className="relative z-10 h-full flex flex-col items-center">
        <MenuSuperior />
        <div className="container flex-1 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-black text-gradient drop-shadow-[0px_2px_5px_rgba(0,0,0,0.99)]">
            {props.titulo}
          </h1>
          <p className="text-xs font-light text-white">{props.descricao}</p>
        </div>
      </div>
    </div>
  );
}
