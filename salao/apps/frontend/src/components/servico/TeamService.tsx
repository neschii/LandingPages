'use client'
import { Service } from '@salao/core'
import { useRouter } from 'next/navigation'
import { useServices } from '@salao/ui'
import ServiceItem from './ServiceItem'
import PageTitle from '../shared/PageTitle'

export default function TeamService() {
    const router = useRouter()
    const { services } = useServices()

    function SchedulePush() {
        router.push('/agendamento')
    }

    return (
        <div className="py-10 m-2 flex flex-col gap-12 ">
            <PageTitle 
                tag="Serviços"
                principal="Do Clássico ao Inovador!"
                secundario="Oferecemos uma variedade de serviços, desde cortes e coloração até tratamentos faciais. Nossos profissionais qualificados realçam sua beleza natural em um ambiente acolhedor e inovador."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {services.map((service: Service) => (
                    <ServiceItem key={service.id} service={service} onClick={SchedulePush} />
                ))}
            </div>
        </div>
    )
}
