
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/orders';

  // récupérer commandes
  getOrders(): Observable<Order[]> {

    return this.http.get<Order[]>(this.apiUrl);

  }

  // créer commande
  createOrder(order: Order): Observable<Order> {

    return this.http.post<Order>(
      this.apiUrl,
      order
    );

  }

}