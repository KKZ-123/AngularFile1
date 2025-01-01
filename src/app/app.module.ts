import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component'; // Import the standalone component

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
