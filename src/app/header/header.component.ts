import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../data-type';
import { ProductServiceService } from '../services/product-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: String = "defaul";
  sellerName: any = '';
  searchResult: undefined | Product[];
  username: string = "";

  constructor(private router: Router, private productService: ProductServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem("seller") && val.url.includes("seller")) {
          this.menuType = "seller";
          if (localStorage.getItem("seller")) {
            let sellerStore = localStorage.getItem("seller");
            let sellerData = sellerStore && JSON.parse(sellerStore);
            this.sellerName = sellerData.name;
          }
        }
        else if (localStorage.getItem('user')) {
          let sellerStore = localStorage.getItem("user");
          let sellerData = sellerStore && JSON.parse(sellerStore);
          this.username = sellerData.name;
          this.menuType = "user";
        } else {
          this.menuType = "default";
        }
      }
    });
  }

  logout() {
    localStorage.removeItem("seller");
    this.router.navigate(["/"])
  }

  userLogout() {
    localStorage.removeItem("user");
    this.router.navigate(["user-auth"])
  }
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.productService.searchProducts(element.value).subscribe((result) => {
        if (result.length > 5) {
          result.length = 5;
        }
        this.searchResult = result;
        console.log(result)

      });
    }
  }

  hideSearch() {
    this.searchResult = [];
  }
  submitSearch(val: string) {
    this.router.navigate([`search/${val}`]);
  }
  goDetails(id: String) {
    this.router.navigate(["/search/" + id]);
  }
}
