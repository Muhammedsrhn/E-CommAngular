import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = "http://localhost:3000/Restaurant";
  userUrl = "http://localhost:3000/Users"

  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }
  addResto(body: Object) {
    return this.http.post(this.url, body);
  }
  deleteResto(id: Number) {
    return this.http.delete(this.url + `/${id}`);
  }
  getCurrentResto(id: Number) {
    return this.http.get(this.url + `/${id}`)
  }
  updateResto(id: Number, body: Object) {
    return this.http.put(this.url + `/${id}`, body)
  }
  registerUser(body: Object) {
    return this.http.post(this.userUrl, body);
  }
  loginUser(email: any, password: any) {
    return this.http.get(this.userUrl + `?email=${email}&password=${password}`);
  }
}
