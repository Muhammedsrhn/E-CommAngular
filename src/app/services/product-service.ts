import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productUrl = "http://localhost:3000/Products"

  constructor(private http: HttpClient) { }

  addProduct(body: Product) {
    return this.http.post(this.productUrl, body);
  }

  getProducts(){
    return this.http.get<Product[]>(this.productUrl);
  }


}
