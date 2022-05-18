import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const RoutesConfig: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'detal', component:ProductsDetalComponent},

];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetalComponent } from './products-detal/products-detal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsDetalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(RoutesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
