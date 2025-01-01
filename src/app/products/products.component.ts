import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }
  products = [
    {id : 1, name : "Hello", price : '109', color : 'Black', available : 'available', image : '/assets/products/product-image1.png'},
    {id : 2, name : "Testing", price : '100', color : 'White', available : 'available', image : '/assets/products/product-image2.png'},
    {id : 3, name : "Hello", price : '120', color : 'Gray', available : 'available', image : '/assets/products/product-image3.png'},

  ];
}
