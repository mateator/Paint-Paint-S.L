import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() textToFilter = new EventEmitter<string>();

  constructor() { }

  filterInput = new FormControl();
  ngOnInit(): void {
  }

  filter(){

    this.textToFilter.emit(this.filterInput.value);
  }
}
