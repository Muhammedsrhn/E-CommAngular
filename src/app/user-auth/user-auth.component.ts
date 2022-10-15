import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  showLogin: Boolean = true;
  fail: Boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.router.navigate([""])
    }
  }

  userLogin(data: Login) {
    this.userService.userLogin(data).subscribe((result: any) => {
      if (!result[0]) {
        console.warn("login failed");
        this.fail = true;
        return;
      } else {
        this.router.navigate([""]);
        delete result.password;
        console.log(result)
        localStorage.setItem("user", JSON.stringify(result[0]))
      }
    })
  }
  signUp(data: SignUp) {
    this.userService.userSignUp(data)
      .subscribe((result: any) => {
        if (result) {
          delete result.body.password;
          localStorage.setItem('user', JSON.stringify(result.body))
          this.router.navigate(["/"]);
        }
        console.log(result);
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
    }, 1500)
  }

}
