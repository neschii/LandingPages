export interface TicketData {
  id: number;
  title: string;
  location: string;
  date: string;
  image: string;
}

export const tickets: TicketData[] = [
  {
    id: 1,
    title: "LOVE Session",
    location: "Rio de Janeiro, RJ",
    date: "Sábado, 15 de Fev às 11:00",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Vale Encantado",
    location: "RIOCENTRO - Rio de Janeiro, RJ",
    date: "Domingo, 19 de Jan às 14:00",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "SHORT AND SWEET TOUR",
    location: "Espaço Galeria Jardim - Rio de Janeiro, RJ",
    date: "Terça, 04 de Mar às 11:00",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
  },
    {
    id: 4,
    title: "Já Eras Tour",
    location: "Allianz Parque - São Paulo",
    date: "Terça, 04 de Mar às 11:00",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
  },
];