import { Component, OnInit } from '@angular/core';
import { SellerService } from "../services/seller.service";
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private service: SellerService, private router: Router) { }
  showLogin = true;
  fail = false;
  ngOnInit(): void {
    this.service.reloadSeller();
  }

  SignUp(data: SignUp): void {
    this.service.Register(data);
  }


  LoginIn(body: Login) {
    this.service.SignIn(body).subscribe((result: any) => {
      if (!result[0].name) {
        console.warn("login failed");
        this.fail = true;
        return;
      }
      console.log(result)
      this.router.navigate(["seller-home"]);
      localStorage.setItem("seller", JSON.stringify(result[0]))


    })
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }

  keypress() {
    setTimeout(() => {
      this.fail = false;
    }, 1000)
  }
}
