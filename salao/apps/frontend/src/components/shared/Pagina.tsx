import Rodape from './Rodape'

export interface PaginaProps {
    children: React.ReactNode
}
export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col content=width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
            <main>{props.children}</main>
            <Rodape />
        </div>
    )
}
