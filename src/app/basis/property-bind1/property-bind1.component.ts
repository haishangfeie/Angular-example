import { Component, OnInit } from '@angular/core';
/**
 * 本案例演示的是属性绑定
 *
 */
@Component({
  selector: 'app-property-bind1',
  templateUrl: './property-bind1.component.html',
  styleUrls: ['./property-bind1.component.css']
})
export class PropertyBind1Component implements OnInit {
  // 绑定1
  public title;
  // 属性绑定2
  public imgUrl;
  constructor() {
    this.title = '这是属性绑定1-插值表达式';
    this.imgUrl = 'http://placehold.it/320x150';
  }

  ngOnInit() {
  }

}
