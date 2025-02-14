export interface EventosData {
  id: number;
  title: string;
  location: string;
  date: string;
  image: string;
  type: string;
}

export const events: EventosData[] = [
  {
    id: 1,
    title: "SummerEletro Hits",
    location: "Mandarim Jockey, Rio de Janeiro",
    date: "Sábado, 15 de Fev às 11:00",
    image: "https://images-americanas.b2w.io/produtos/1585880233/imagens/summer-eletro-hits-cd-nacional/1585880241_1_large.jpg",
    type: "Festa",
  },
    {
    id: 2,
    title: "Baile à Fantasia do Grupo Botequim",
    location: "Salvador - BA",
    date: "Domingo, 19 de Jan às 14:00",
    image: "https://images.sympla.com.br/679a8093862a7-lg.png",
    type: "Evento",
  },
  {
    id: 3,
    title: "Short n' Sweet",
    location: "Allianz Parque - São Paulo",
    date: "Terça, 04 de Mar às 11:00",
    image: "https://i.scdn.co/image/ab67616d0000b273fd8d7a8d96871e791cb1f626",
    type: "Show",
  },
    {
    id: 4,
    title: "ME CHAMA DE POP",
    location: "Estação NET Rio, Rio de Janeiro - RJ",
    date: "15 Fev às 23:00",
    image: "https://images.sympla.com.br/679bbc4c9b41c-lg.jpg",
    type: "Festa",
  },
      {
    id: 5,
    title: "João Gomes",
    location: "Feira São Cristovão - RJ",
    date: "Terça, 04 de Mar às 21:00",
    image: "https://monkeybuzz.com.br/wp-content/uploads/2022/05/joao-gomes.jpg",
    type: "Show",
  },
  {
    id: 6,
    title: "Festival de Jazz ao Ar Livre",
    location: "Parque da Redenção - Porto Alegre, RS",
    date: "Domingo, 28 de Abr às 16:00",
    image: "https://images.unsplash.com/photo-1613941921908-be2113bfbd80?q=80&w=2070",
    type: "Festival",
  },
  {
    id: 7,
    title: "Rock in Rio 2024",
    location: "Parque Olímpico - Rio de Janeiro, RJ",
    date: "Sábado, 14 de Set às 12:00",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
    type: "Festival",
  },
  {
    id: 8,
    title: "Palestra: Sustentabilidade Urbana",
    location: "UFPE - Recife, PE",
    date: "Quarta, 06 de Mar às 09:00",
    image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&",
    type: "Palestra",
  },
  {
    id: 9,
    title: "Noite Eletrônica Neon",
    location: "D-Edge Club - São Paulo, SP",
    date: "Sábado, 02 de Mar às 23:00",
    image: "https://images.unsplash.com/photo-1577648674937-f3851cfbfad8?q=80&w=2070",
    type: "Festa",
  },
  {
    id: 10,
    title: "Conferência Internacional de Saúde",
    location: "SulAmérica - Rio de Janeiro, RJ",
    date: "Segunda, 18 de Mar às 08:30",
    image: "https://images.unsplash.com/photo-1561489401-fc2876ced162?q=80&w=2070",
    type: "Palestra",
  }
];