import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private resto: RestoService) { }
  collection: any = [];

  gelAll() {
    this.resto.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }

  ngOnInit(): void {
    this.gelAll();
  }


  delteResto(id: any) {
    this.resto.deleteResto(id).subscribe((result) => {
    this.gelAll();
    })
  }

}
