export interface PageTitleProps {
    tag?: string
    principal: string
    secundario: string
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            {props.tag && (
                <div className="text-sm md:text-base bg-purple-900 px-4 py-2.5 rounded-md font-black mb-2">
                    {props.tag}
                </div>
            )}
            <h2 className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.99)] text-2xl sm:text-4xl md:text-5xl font-black text-gradient">
                {props.principal}
            </h2>
            <h3 className="text-white md:w-[450px] px-7 md:px-0 text-center">
                {props.secundario}
            </h3>
        </div>
    )
}