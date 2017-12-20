import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [ // 这里存放着所有路线的集合，每条路线都用一个对象存放信息
  // 对象最起码要有path和component这两个属性，path 表示路径，component表示满足路径时的组件
  { path: '', component: HomeComponent},
  { path: 'product', component: ProductComponent}  // 注意这里不用'/'开头，path不用斜杠开头，以后才能方便地使用相对路径和绝对路径
];



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
