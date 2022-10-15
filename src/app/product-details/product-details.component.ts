import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { ProductServiceService } from '../services/product-service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: undefined | Product[];
  productCount: any = 1;

  constructor(private route: ActivatedRoute, private producService: ProductServiceService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get("id");
    this.producService.getProducts(productId).subscribe((result) => {
      this.productDetails = result;
      console.log(result);
    })
  }

  handleProduct(val: String) {
    if (val === "plus") {
      this.productCount++;
    } else if (val === "min") {
      if (this.productCount <= 1) {
        this.productCount = 1;
      } else {
        this.productCount--;
      }
    }
    console.log(val)
  }

}
