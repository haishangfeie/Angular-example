import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';

@Component({
  selector: 'app-jquery-bootstrap',
  templateUrl: './jquery-bootstrap.component.html',
  styleUrls: ['./jquery-bootstrap.component.css']
})
export class JqueryBootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const arr = [1, 2, 3];
    jquery.each(arr, (key, val) => {
      console.log(key, val);
    });
  }

}
