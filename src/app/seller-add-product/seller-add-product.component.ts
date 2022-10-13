import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../data-type';
import { ProductServiceService } from '../services/product-service';
ProductServiceService
@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addControl:Boolean = false;

  constructor(private route: Router, private productService: ProductServiceService) { }

  ngOnInit(): void {

  }


  addProduct(data: Product) {
    this.productService.addProduct(data).subscribe((result) => {
      console.log(result);
      this.addControl = true;
      setTimeout(() => {
        this.addControl=false
      }, 3000);
    
    });
  }



}
