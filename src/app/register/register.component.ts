import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private resto: RestoService) { }
  addRegister = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  alert:Boolean = false;

  ngOnInit(): void {
  }

  collectResto() {
    this.resto.registerUser(this.addRegister.value).subscribe((e) => {
      this.alert = true
      this.addRegister.reset({});
    })
  }

  closeAlert() {
    this.alert = false;
  }
}


