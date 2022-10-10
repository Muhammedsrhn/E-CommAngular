import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private resto: RestoService, private router: Router) { }
  addLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  userCheck: Boolean = false;

  ngOnInit(): void {

  }
  Login() {
    this.resto.loginUser(this.addLogin.value.email, this.addLogin.value.password).subscribe((e: any) => {

      if (e[0]) {
        delete e[0].password;
        console.log(e[0])
        this.router.navigate(["/"]);
      } else {
        this.userCheck = true;
        console.log("No users Found");
      }
    })
  }

  closeAlert() {
    this.userCheck = false;
  }
}
