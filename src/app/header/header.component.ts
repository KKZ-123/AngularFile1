import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    
  }
  slogan : string = 'Your one stop shop for everything.';
  source : string = '/assets/eshopping.png';

  getSlogan(){
    return 'This is a new slogan for this web application.'
  }
}
