import Service from '../Service/Service'

const services: Service[] = [
    {
        id: 1,
        name: 'Cuide de seu CABELO!',
        description:
            '💇‍♀️ Transforme seu visual! Hidrate, corte, pinte e colore seus cabelos com nossa talentosa profissional. Deixe-se levar pela magia da renovação e sinta-se incrivel',
        price: 100,
        slotAmount: 3,
        imagemURL: '/services/servicos.jpg',
    },
    {
        id: 2,
        name: 'Manicure e Pedicure',
        description:
            '💅 Que tal dar um toque especial às suas unhas? mimar seus pés com um cuidado especial? Ou quem sabe, se jogar no glamour com um alongamento de unhas em porcelana? Transforme suas mãos e pés em verdadeiras obras de arte e sinta-se deslumbrante!',
        price: 80,
        slotAmount: 2,
        imagemURL: '/services/unhas.jpg',
    },
    {
        id: 3,
        name: 'Facial/Corpo',
        description:
            '💄 Revitalize seu rosto com nossa incrível limpeza de pele! Modele suas sobrancelhas, faça a depilação ou desfrute de uma massagem relaxante. Aqui, cuidamos do seu bem-estar com carinho e dedicação! 🌿💆',
        price: 160,
        slotAmount: 2,
        imagemURL: '/services/pele.jpg',
    },
    {
        id: 4,
        name: 'Dia de Princesa',
        description:
            '👸 Permita-se um dia de puro luxo e relaxamento com nosso combo exclusivo! O Dia de Princesa inclui manicure, pedicure, depilação, design de sobrancelhas, hidratação capilar, limpeza de pele e uma massagem revigorante. 💎',
        price: 310,
        slotAmount: 2,
        imagemURL: '/services/princesas.png',
    },
    {
        id: 5,
        name: 'Dia da Noiva',
        description:
            '👰🕊️ Tenha um dia incrível sendo tratada como noiva! O Dia da Noiva incluí, limpeza de pele, design de sobrancelhas, depilação, manicure e pedicure, corte e hidratação capilar e uma massagem relaxante.',
        price: 430,
        slotAmount: 2,
        imagemURL: '/services/mesnoiva.jpg',
    },
    {
        id: 6,
        name: 'Combo do Mês',
        description:
            '💖🌟 Uma experiência de beleza completa! Inclui hidratação de cabelo, manicure e pedicure, limpeza de pele e design de sobrancelha. Renove-se e sinta-se radiante! ✨',
        price: 250,
        slotAmount: 2,
        imagemURL: '/services/mes.png',
    },


]

export default services
