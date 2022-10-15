import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductServiceService } from '../services/product-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProduct: undefined | Product[];
  trendyProduct: undefined | Product[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.popularProducts().subscribe((result) => {
      console.log(result)
      this.popularProduct = result;
    });

    this.productService.trendyProducts().subscribe((result)=>{
      console.log(result);
      this.trendyProduct=result;
    })
  }
}
