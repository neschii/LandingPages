export interface Service {
    id: string
    name: string
    imagemURL: string
    procedimentos: Procedimento[]
}

export interface Procedimento {
    id: string
    name: string
    price: number
    duration: number 
}