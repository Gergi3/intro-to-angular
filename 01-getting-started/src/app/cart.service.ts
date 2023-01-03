import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  constructor(
    private http: HttpClient
  ) { }

  addProduct(product: Product) : void {
    this.products.push(product);
  }

  getProducts() : Product[] {
    return this.products;
  }

  clearCart() : void {
    this.products.length = 0;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
