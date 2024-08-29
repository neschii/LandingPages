import Service from '../Service/Service'

const services: Service[] = [
    {
        id: 1,
        name: 'Cuide de seu CABELO!',
        description:
            'Hidrate, corte, pinte, colora e mude de visual. Seus cabelos estarão na mão da nossa talentosa profissional.',
        price: 100,
        slotAmount: 3,
        imagemURL: '/services/servicos.jpg',
    },
    {
        id: 2,
        name: 'Manicure e Pedicure',
        description:
            'Que tal pintar a unha? Cuidar do pé? Ou até mesmo colocar alongamento de unha de porcelana?',
        price: 80,
        slotAmount: 2,
        imagemURL: '/services/unhas.jpg',
    },
    {
        id: 3,
        name: 'Estética facial e corpo',
        description:
            'Revitalize seu rosto com a nossa incrível limpeza de pele, modele suas sobrancelhas e faça a depilação. Aqui cuidamos do seu bem-estar!',
        price: 160,
        slotAmount: 2,
        imagemURL: '/services/pele.jpg',
    },
    {
        id: 4,
        name: 'Dia de Princesa',
        description:
            'Permita-se um dia de puro luxo e relaxamento com nosso combo exclusivo! O Dia de Princesa inclui manicure, pedicure, depilação, design de sobrancelhas, hidratação capilar, limpeza de pele e uma massagem revigorante.',
        price: 310,
        slotAmount: 2,
        imagemURL: '/services/princesas.png',
    },
    {
        id: 5,
        name: 'Dia da Noiva',
        description:
            'Tenha um dia incrível sendo tratada como noiva! O Dia da Noiva incluí, limpeza de pele, design de sobrancelhas, depilação, manicure e pedicure, corte e hidratação capilar e uma massagem relaxante.',
        price: 430,
        slotAmount: 2,
        imagemURL: '/services/mesnoiva.jpg',
    },
    {
        id: 6,
        name: 'Combo do Mês',
        description:
            'O Combo do Mês inclui uma hidratação de cabelo, manicure e pedicure, limpeza de pele e design de sobrancelha',
        price: 250,
        slotAmount: 2,
        imagemURL: '/services/mes.png',
    },


]

export default services
