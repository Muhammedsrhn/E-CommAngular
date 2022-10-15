import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productUrl = "http://localhost:3000/Products";

  constructor(private http: HttpClient) { }

  addProduct(body: Product) {
    return this.http.post(this.productUrl + "/", body);
  }

  productsList() {
    return this.http.get<Product[]>(this.productUrl + "/");
  }

  delProduct(id: Number) {
    return this.http.delete(this.productUrl + "/" + id);
  }

  getProducts(id: any) {
    return this.http.get<Product[]>(this.productUrl + "?id=" + id);
  }

  updateProducts(id: Number, data: Product) {
    return this.http.put(this.productUrl + `/${id}`, data);
  }

  popularProducts() {
    return this.http.get<Product[]>(this.productUrl + "?_limit=5");
  }

  trendyProducts() {
    return this.http.get<Product[]>(this.productUrl + "?_limit=8");
  }

  searchProducts(query: any) {
    return this.http.get<Product[]>(this.productUrl + `?q=${query}`);
  }
}
