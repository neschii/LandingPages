import { ReactNode } from "react"

type Props = { 
    children: ReactNode
}

export function Container({children}: Props) {
    return (
            <div className="flex-1 w-full max-w-w[1246px] px-[15px] mx-auto text-center "> 
             {children}
            </div>
        ) 
    }