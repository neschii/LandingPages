import Servico from '../servico/Servico'

const servicos: Servico[] = [
    {
        id: 1,
        nome: 'Cabelo',
        descricao:
            '💇‍♀️ Transforme seu visual! Hidrate, corte, pinte e colore seus cabelos com nossa talentosa profissional. Deixe-se levar pela magia da renovação e sinta-se incrivel',
        preco: 100,
        qtdeSlots: 3,
        imagemURL: '/servicos/Cabelos.jpg',
    },
    {
        id: 2,
        nome: 'Manicure e Pedicure',
        descricao:
            '💅 Que tal dar um toque especial às suas unhas? mimar seus pés com um cuidado especial? Ou quem sabe, se jogar no glamour com um alongamento de unhas em porcelana? Transforme suas mãos e pés em verdadeiras obras de arte e sinta-se deslumbrante!',
        preco: 90,
        qtdeSlots: 2,
        imagemURL: '/servicos/Manicure.jpg',
    },
    {
        id: 3,
        nome: 'Facial e Corpo',
        descricao:
           '💄 Revitalize seu rosto com nossa incrível limpeza de pele! Modele suas sobrancelhas, faça a depilação ou desfrute de uma massagem relaxante. Aqui, cuidamos do seu bem-estar com carinho e dedicação! 🌿💆',
        preco: 160,
        qtdeSlots: 2,
        imagemURL: '/servicos/Facial.jpg',
    },
    {
        id: 4,
        nome: 'Dia de Princesa',
        descricao:
            '👸 Permita-se um dia de puro luxo e relaxamento com nosso combo exclusivo! O Dia de Princesa inclui manicure, pedicure, depilação, design de sobrancelhas, hidratação capilar, limpeza de pele e uma massagem revigorante. 💎',
        preco: 310,
        qtdeSlots: 2,
        imagemURL: '/servicos/Princesa.jpg',
    },
    {
        id: 5,
        nome: 'Dia da Noiva',
        descricao:
            '👰🕊️ Tenha um dia incrível sendo tratada como noiva! O Dia da Noiva incluí, limpeza de pele, design de sobrancelhas, depilação, manicure e pedicure, corte e hidratação capilar e uma massagem relaxante.',
        preco: 430,
        qtdeSlots: 2,
        imagemURL: '/servicos/MesNoiva.jpg',
    },
    {
        id: 6,
        nome: 'Combo do Mês',
        descricao:
            '💖🌟 Uma experiência de beleza completa! Inclui hidratação de cabelo, manicure e pedicure, limpeza de pele e design de sobrancelha. Renove-se e sinta-se radiante! ✨',
        preco: 250,
        qtdeSlots: 2,
        imagemURL: '/servicos/Combo.jpg',
    },
]

export default servicos
