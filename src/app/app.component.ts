import { Component } from '@angular/core';
import { ContainerComponent } from './Container/container.component'; // Import ContainerComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ContainerComponent], // Add ContainerComponent to imports
})
export class AppComponent {}
