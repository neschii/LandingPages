import { Professional } from '../professional'
import { Service } from '../Service'
import { User } from '../usuario'
import { Procedure } from '../procedure'

export default interface Agendamento {
    id: number
    data: Date
    user: User
    professional: Professional
    services: Service[]
    procedures: Procedure[]
}
