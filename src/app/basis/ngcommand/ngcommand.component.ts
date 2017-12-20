// 演示的是内置指令
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcommand',
  templateUrl: './ngcommand.component.html',
  styleUrls: ['./ngcommand.component.css']
})
export class NgcommandComponent implements OnInit {
  public myVar;
  public choice;
  constructor() {
    this.myVar = 'C';
    this.choice = 2;
  }

  ngOnInit() {
  }

}
