import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-type';
import { ProductServiceService } from '../services/product-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult:undefined|Product[];

  constructor(private productService: ProductServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let query = this.route.snapshot.paramMap.get('id')
    this.productService.searchProducts(query).subscribe((result) => {
      console.log(result)
      this.searchResult=result;
    })
  }

}
