import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  static pagination$ = new Subject<any>();

  constructor(private http: HttpClient) { }

  getPeopleData(){
    return HomeService.pagination$.pipe(
      switchMap(body => this.http.post(environment.urlApi + '/people', body))
    );
  }
}
