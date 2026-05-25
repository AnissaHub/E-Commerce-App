import { Product } from './products';

export interface Order {

  id?: number;

  products: Product[];

  total: number;

  date: string;

}