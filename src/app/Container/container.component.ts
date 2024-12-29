import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component'; // Import NavComponent
import { HeaderComponent } from '../header/header.component'
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-container',
  standalone: true,
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  imports: [NavComponent, HeaderComponent, NotificationComponent], // Add NavComponent to imports
})
export class ContainerComponent {}
