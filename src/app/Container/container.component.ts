import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component'; // Import NavComponent
import { HeaderComponent } from '../header/header.component'
import { NotificationComponent } from '../notification/notification.component';
import { SearchComponent } from '../search/search.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-container',
  standalone: true,
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  imports: [NavComponent, HeaderComponent, NotificationComponent, SearchComponent, ProductsComponent], // Add NavComponent to imports
})
export class ContainerComponent {}
