import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from "@angular/forms";
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  alert: Boolean = false
  updatResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })

  constructor(private resto: RestoService, private router: ActivatedRoute) { }
  id: number = 0;

  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"];
    console.log(this.id)
    this.resto.getCurrentResto(this.id).subscribe((e: any) => {
      this.updatResto = new FormGroup({
        name: new FormControl(e["name"]),
        email: new FormControl(e["email"]),
        address: new FormControl(e["address"]),
      })

    });
  }

  updateresto() {
    console.log(this.updatResto.value)
    this.resto.updateResto(this.id, this.updatResto.value).subscribe((result) => {
      console.log(result);
      this.alert = true;
      this.updatResto.reset({});
    });
  }

  closeAlert() {
    this.alert = false;
  }

}
