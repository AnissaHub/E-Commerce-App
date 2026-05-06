import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // URL de backend JSON-server
  private apiUrl = 'http://localhost:3000/products';

  // injection de HttpClient
  constructor(private http: HttpClient) {}

  // récupérer tous les produits
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
