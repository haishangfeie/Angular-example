import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PropertyBind1Component } from './basis/property-bind1/property-bind1.component';
import { JqueryBootstrapComponent } from './basis/jquery-bootstrap/jquery-bootstrap.component';
import { NgcommandComponent } from './basis/ngcommand/ngcommand.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyBind1Component,
    JqueryBootstrapComponent,
    NgcommandComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
