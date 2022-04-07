import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  displayedColumns: string[] = ['fullName', 'birthDate', 'sex', 'phone', 'country', 'lastModification'];
  dataSource = [{fullName: 'nose' , birthDate: 'cacasaca' , sex: '59kg', phone: 'zzzz', country: 'ccc', lastModification: 'acscss' }];
  filters = {limit: 10 , offset: 0, textToFilter: ""}
  ngOnInit(): void {
    this.homeService.getPeopleData().subscribe((data: any) =>{
      this.dataSource = data;
      console.log(this.dataSource);
    })
    this.getPeopleData();
  }

  changePage(e:any){
    console.log(e.pageSize);
    console.log(e.pageIndex);

    this.filters = {limit: e.pageSize, offset: e.pageIndex, textToFilter: this.filters.textToFilter}
    this.getPeopleData();
  }

  filterByText(input:any){
    this.filters.textToFilter = input.value;
    this.getPeopleData();
  }

  getPeopleData(){
    HomeService.pagination$.next(this.filters)

  }

}
