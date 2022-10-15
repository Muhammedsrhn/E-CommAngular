import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { ProductServiceService } from '../services/product-service';

@Component({
  selector: 'app-seller-update',
  templateUrl: './seller-update.component.html',
  styleUrls: ['./seller-update.component.css']
})
export class SellerUpdateComponent implements OnInit {
  addControl: Boolean = false;
  id: any = this.route.snapshot.paramMap.get("id");
  productData: undefined | Product;

  constructor(private productService: ProductServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getProducts(this.id).subscribe((result) => {
      console.log(result);
      this.productData = result[0];
    });
  }

  updateProduct(data: Product) {
    this.productService.updateProducts(this.id, data).subscribe((result) => {
      console.log(result);
      this.addControl = true;
    });
  }



}
