import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root' 
})
export class CartService {

  //  panier privé (stockage des produits)
  private cart: Product[] = [];

  //  récupérer le panier
  getCart(): Product[] {
    return this.cart;
  }

  // ajouter un produit au panier
  addToCart(product: Product) {
    // si plus de stock → on bloque
   if (product.stock <= 0) return;
    // vérifier si le produit existe déjà
    const existingProduct = this.cart.find(p => p.id === product.id);

    if (existingProduct) {
      // si déjà présent → augmenter quantité
      existingProduct.quantity++;
    } else {
      // sinon ajouter avec quantité = 1
      this.cart.push({
        ...product,
        quantity: 1
      });
    }
    //on diminue le stock ici
    product.stock--;
  }

  //  augmenter quantité
  increase(product: Product) {
    const item = this.cart.find(p => p.id === product.id);

    if (item) {
      item.quantity++;
    }
  }

  //  diminuer quantité (et supprimer si = 0)
  decrease(product: Product) {

  const item = this.cart.find(p => p.id === product.id);

  if (!item) return;

  //  on enlève 1 du panier
  item.quantity--;

  //on remet 1 dans le stock
  product.stock++;

  //si quantité = 0 → suppression complète du produit
  if (item.quantity <= 0) {
    this.removeFromCart(product);
  }
}
  // supprimer complètement un produit
  removeFromCart(product: Product) {

  const item = this.cart.find(p => p.id === product.id);

  if (!item) return;

  // on remet TOUTES les quantités dans le stock
  product.stock += item.quantity;

  //  suppression du panier
  this.cart = this.cart.filter(p => p.id !== product.id);
}

  // vider tout le panier
 clearCart() {

  //remettre le stock pour chaque produit du panier
  this.cart.forEach(item => {
    item.stock += item.quantity;
  });

  // vider le panier
  this.cart = [];
}
  // calculer le total du panier
  getTotal(): number {
    return this.cart.reduce((total, product) => {
      return total + product.prix * product.quantity;
    }, 0);
  }
}