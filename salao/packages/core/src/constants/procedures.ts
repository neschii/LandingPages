
import { Procedure } from '../procedure/Procedure'

const procedures: { [key: number]: Procedure[] } = {
  1: [ 
    { id: 101, name: 'Corte de cabelo', serviceId: 1 },
    { id: 102, name: 'Hidratação', serviceId: 1 },
    { id: 103, name: 'Coloração', serviceId: 1 },
    { id: 104, name: 'Escova', serviceId: 1 },
    { id: 105, name: 'Progressiva', serviceId: 1 },
  ],
  2: [ 
    { id: 201, name: 'Manicure', serviceId: 2 },
    { id: 202, name: 'Pedicure', serviceId: 2 },
    { id: 203, name: 'Alongamento de unhas', serviceId: 2 },
    { id: 204, name: 'Esmaltação em gel', serviceId: 2 },
  ],
  3: [ 
    { id: 301, name: 'Limpeza de pele', serviceId: 3 },
    { id: 302, name: 'Design de sobrancelhas', serviceId: 3 },
    { id: 303, name: 'Depilação', serviceId: 3 },
    { id: 304, name: 'Massagem relaxante', serviceId: 3 },
  ],
  
}

export default procedures