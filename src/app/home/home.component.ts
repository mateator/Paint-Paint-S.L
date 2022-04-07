import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['fullName', 'name', 'gender', 'phone', 'country', 'lastModification'];
  dataSource = [{fullName: 'nose' , name: 'caca' , gender: '59kg', phone: 'zzzz', country: 'ccc', lastModification: 'ass' }];

  ngOnInit(): void {
    const hola = 's';
  }

}
