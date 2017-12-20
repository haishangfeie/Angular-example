import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: '**', component: Code404Component}
];



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    Code404Component
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
