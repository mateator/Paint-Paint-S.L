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
  dataSource = [{fullName: 'nose' , birthDate: 'cacasaca' , sex: '59kg', phone: '', country: 'ccc', lastModification: '' }];
  dataSourceLength = 0;
  filters = {limit: 10 , offset: 0, textToFilter: ''};

  ngOnInit(): void {
    this.homeService.getPeopleData().subscribe((data: any) => {
      this.dataSource = data.data;
      this.dataSourceLength = data.total;
    });
    this.getPeopleData();
  }

  changePage(e: any){
    this.filters = {limit: e.pageSize, offset: e.pageIndex, textToFilter: this.filters.textToFilter};
    this.getPeopleData();
  }

  filterByText(input: any){
    this.filters.textToFilter = input;
    this.getPeopleData();
  }

  getPeopleData(){
    HomeService.pagination$.next(this.filters);
  }

}
