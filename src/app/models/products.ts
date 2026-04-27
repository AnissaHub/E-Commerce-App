export class Product {
  constructor(
    public id: number,
    public nom: string,
    public prix: number,
    public image?: string,
    public quantity: number = 1  
  ) {}
}