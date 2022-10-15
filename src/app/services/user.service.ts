import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = "http://localhost:3000/Users"

  constructor(private http: HttpClient) { }


  userSignUp(body: SignUp) {
    return this.http.post(this.userUrl, body, { observe: "response" });
  }

  userLogin(body:Login){
    return this.http.get(this.userUrl+`?email=${body.email}&password=${body.password}`)
  }
}
