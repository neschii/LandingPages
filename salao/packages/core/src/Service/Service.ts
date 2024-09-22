export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  slotAmount: number;
  imagemURL: string;
  procedures?: Procedure[];
}

export interface Procedure {
  id: number;
  name: string;
  serviceId: number;
}