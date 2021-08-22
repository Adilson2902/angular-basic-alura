export interface Transferencia {
  id?: number | string;
  valor: number;
  destino: number | string;
  data?: string;
}

export interface RootObject {
  transferencias: Transferencia[];
}
