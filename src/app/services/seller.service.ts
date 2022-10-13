import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  issellerLogin = new BehaviorSubject<boolean>(false);
  userUrl = "http://localhost:3000/Users"
  constructor(private http: HttpClient, private router: Router) { }

  Register(body: SignUp) {
    this.http.post(this.userUrl + "/", body, { observe: 'response', }).subscribe((result) => {
      this.issellerLogin.next(true)
      localStorage.setItem("seller", JSON.stringify(result.body))
      this.router.navigate(["seller-home"])
      console.warn(result)
    })
  };
  SignIn(body: Login) {
    return this.http.get(this.userUrl + `?email=${body.email}&password=${body.password}`);
  }
 
  reloadSeller() {
    if (localStorage.getItem("seller")) {
      this.issellerLogin.next(true)
      this.router.navigate(["seller-home"])
    }
  }



}
