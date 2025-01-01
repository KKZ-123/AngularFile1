import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  
  }
  searchValue : string = '';
  changeSerachValue(eventData : Event){
    this.searchValue = ((<HTMLInputElement>eventData.target).value);
  }
}
