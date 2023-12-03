export interface FindInvoiceFacadeOutputDTO {
  id: string;
  name: string;
  document: string;
  address: {
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
  }[];
  total: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GenerateInvoiceFacadeInputDTO {
  name: string;
  document: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
}

export interface GenerateInvoiceFacadeOutputDTO {
  id: string;
  name: string;
  document: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
  }[];
  total: number;
  createdAt: Date;
  updatedAt: Date;
}

export default interface InvoiceFacadeInterface {
  find(id: string): Promise<FindInvoiceFacadeOutputDTO>;
  generate(input: GenerateInvoiceFacadeInputDTO): Promise<GenerateInvoiceFacadeOutputDTO>;
}