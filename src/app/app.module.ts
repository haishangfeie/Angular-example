import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PropertyBind1Component } from './basis/property-bind1/property-bind1.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyBind1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
